import requests

# term = "Madonna"

# res = requests.get(
#     "https://itunes.apple.com/search",
#     params={'terms': 'Jack Johnson', 'limit': 5}
#     )

# data = res.json()

# for result in data['results']:
#     print(result['trackName'])
#     print(result['artistName'])

data = {
    'username': 'chickenz',
    'tweets': [
        'hello!', 'goodbye!', 'bock bock', {'id': 1, 'text': 'my first tweet!' }
    ]
}

requests.post('https://eo3yo345ud6ww4w.m.pipedream.net', json=data)