from django.shortcuts import render
from.models import post

def one(request):
	return render (request,'css.html')

def two(request):
	return render (request,'html.html')

def three(request):
	return render (request,'bootstrap.html')

def four(request):
	obj =post.objects.all()
	context={'model':obj}
	return render(request,'pak.html',context)


def five(request):
	return render (request,'home.html')

def six(request):
	return render(request, 'div.html')