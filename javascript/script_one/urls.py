from django.urls import path
from.import views

urlpatterns = [
	path('bootstrap/',views.three,name='bootstrap'),
    path('css/',views.one,name='css'),
    path('html/',views.two,name='html'),
    path('pak/',views.four,name='pak'),
    path('div/',views.six,name='div'),
    path('',views.five,name='home'),
]
