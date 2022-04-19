import requests

ServerUrl = 'https://ibeike.ustb.edu.cn/teach_week/'
# ServerUrl = 'http://127.0.0.1:60041/'
print(requests.get(ServerUrl + '?date=2022-04-19').json())
# {"termName":"2021-2022-2","rest":false,"original":{"week":9,"day":2},"real":{"week":9,"day":2}}
