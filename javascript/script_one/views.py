from django.shortcuts import render

def one(request):
	return render (request,'home.html')
