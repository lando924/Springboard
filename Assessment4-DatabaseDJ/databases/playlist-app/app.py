from flask import Flask, redirect, render_template, flash
from flask_debugtoolbar import DebugToolbarExtension

from models import db, connect_db, Playlist, Song
from forms import NewSongForPlaylistForm, SongForm, PlaylistForm

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///playlist-app'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_ECHO'] = True

connect_db(app)

app.app_context().push()

db.create_all()

app.config['SECRET_KEY'] = "I'LL NEVER TELL!!"

# Having the Debug Toolbar show redirects explicitly is often useful;
# however, if you want to turn it off, you can uncomment this line:
#
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

debug = DebugToolbarExtension(app)


@app.route("/")
def root():
    """Homepage: redirect to /playlists."""

    return redirect("/playlists")


##############################################################################
# Playlist routes


@app.route("/playlists")
def show_all_playlists():
    """Return a list of playlists."""

    playlists = Playlist.query.all()
    return render_template("playlists.html", playlists=playlists)


@app.route("/playlists/<int:playlist_id>")
def show_playlist(playlist_id):
    """Show detail on specific playlist."""

    playlist = Playlist.query.get_or_404(playlist_id)
    return render_template("playlist.html", playlist=playlist)

@app.route("/playlists/add", methods=["GET", "POST"])
def add_playlist():
    """Handle add-playlist form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-playlists
    """

    form = PlaylistForm()

    if form.validate_on_submit():
        playlist_name = form.name.data.strip()
        
        if not playlist_name:
            flash("Playlist name cannot be empty or just spaces!", "error")
            return render_template("new_playlist.html", form=form)

        new_playlist = Playlist(name=playlist_name, description=form.description.data.strip())

        db.session.add(new_playlist)
        db.session.commit()
        flash("Playlist added successfully", "success")


        return redirect("/playlists")
    
    return render_template("new_playlist.html", form=form)

##############################################################################
# Song routes


@app.route("/songs")
def show_all_songs():
    """Show list of songs."""

    songs = Song.query.all()
    return render_template("songs.html", songs=songs)


@app.route("/songs/<int:song_id>")
def show_song(song_id):
    """return a specific song"""

    song = Song.query.get_or_404(song_id)
    return render_template("song.html", song=song)

@app.route("/songs/add", methods=["GET", "POST"])
def add_song():
    """Handle add-song form:

    - if form not filled out or invalid: show form
    - if valid: add playlist to SQLA and redirect to list-of-songs
    """

    form = SongForm()

    if form.validate_on_submit():
        song_title = form.title.data.strip()
        artist_name = form.artist.data.strip()

        if not song_title:
            flash("Song title cannot be empty or just spaces!", "error")
            return render_template("new_song.html", form=form)

        new_song = Song(title=song_title, artist=artist_name)

        db.session.add(new_song)
        db.session.commit()
        flash("Song added successfully", "success")

        return redirect("/songs")

    return render_template("new_song.html", form=form)    

@app.route("/playlists/<int:playlist_id>/add-song", methods=["GET", "POST"])
def add_song_to_playlist(playlist_id):
    """Add a playlist and redirect to list."""
    print(f"Route accessed for playlist {playlist_id}")
    # BONUS - ADD THE NECESSARY CODE HERE FOR THIS ROUTE TO WORK

    # THE SOLUTION TO THIS IS IN A HINT IN THE ASSESSMENT INSTRUCTIONS

    playlist = Playlist.query.get_or_404(playlist_id)
    form = NewSongForPlaylistForm()

    # Restrict form to songs not already on this playlist

    curr_on_playlist = [s.id for s in playlist.songs]
    songs = Song.query.filter(Song.id.notin_(curr_on_playlist)).all()

    print("Available Songs for Playlist:", [(s.id, s.title) for s in songs])

    form.song.choices = [(s.id, f"{s.title} - {s.artist}") for s in songs]

    if form.validate_on_submit():
        song = Song.query.get(form.song.data)
        playlist.songs.append(song)

        print(f"Added song {song.title} to playlist {playlist.name}")

        db.session.commit()
        return redirect(f"/playlists/{playlist_id}")

    return render_template("add_song_to_playlist.html",
                             playlist=playlist,
                             form=form)
