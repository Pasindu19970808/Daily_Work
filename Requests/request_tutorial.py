#code has been commented out to make the session run
import requests
import json

""" url = "https://xkcd.com/353/"
r = requests.get(url=url) """

#print(r.text)
#print (r.text) will get you html that is readable
#print (r.content) will get you a byte string

#if we want to download something we use r.content as a byte string

""" image_url = "https://imgs.xkcd.com/comics/python.png"
r2 = requests.get(url = image_url) """

#r2.content will print the bytes of that image
#writing the byte content onto a file
#write bytes

""" with open('comic.png','wb') as a:
    a.write(r2.content) """

#print(r.headers)

main_url = "https://httpbin.org/"
#doing a GET request on a route that has some URL parameters
#httpbin.org will respond with JSON information of what we sent in the request
get_request = "https://httpbin.org/get"
#to include parameters in your get request, we can create a dictionary of the parameters to use and then use the requests library to pass in the parameters to the URL
payload = {'page':2,'count':25}
#r3 = requests.get(url = get_request,params=payload)
#this response from the get request comes as an html string but in json format
#print(r3.text)
#we can use json.loads to parser the string to json format
#print(json.loads(r3.text))

#POST data to a URL

payload_post = {'username':'pasindu','password':'testing'}
post_url = "https://httpbin.org/post"
#r4 = requests.post(url = post_url,data = payload_post)
#print(r4.text)
#r4.json() results in a python dictionary
#r_dict = r4.json()


#if you are trying to log in to a website, not always it is done through form authentication. Some are done through Basic Authentication
basic_auth_url = "https://httpbin.org/basic-auth/pasindu/testing"
#r5 = requests.get(url = basic_auth_url,auth = ('pasindu','testing'))

#if we pass in wrong basic authentication information, then there is not "r.text" available. But you will see that the response is a 401 Access Denied response.

#print(r5.headers)

#with requests, if the website is not giving what is required, it tends to wait indefinitely. Hence its better to set a timeout
timeout_url = "https://httpbin.org/delay/1"
#r6 = requests.get(url = timeout_url,timeout = 3)
#print(r6)
#what if the timeout is less than the delay. Then it causes exception
timeout_url_2 = "https://httpbin.org/delay/6"
#r7 = requests.get(url = timeout_url_2,timeout = 1)
#print(r7)



ims_url = "http://ims.irescglobal.com/user/signin.html"
next_ims_url = "http://ims.irescglobal.com/account/expenseclaim/list.html"
payload_iresc = {'username':'Pasindu','password':'54847342'}


with requests.Session() as s:
    r_iresc = s.post(url = ims_url, data = payload_iresc)
    print(r_iresc)
    r_expense = s.get(next_ims_url)
    with open('test.txt','wb') as t:
        t.write(r_expense.content)
    t.close()

""" sifpro_url = "https://w-sifpro-thaioil-cfp.cenosco.software"


#r_sifpro = requests.post(url = sifpro_url, data=payload_sifpro)
#print(r_sifpro)

with requests.Session() as saipem:
    r_saipem = saipem.post(sifpro_url, data = payload_sifpro)
    print(r_saipem)
    r_saipem2 = saipem.get(sifpro_url_2)
    with open('test.txt','wb') as t:
        t.write(r_saipem2.content)
    t.close() """

