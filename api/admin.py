from django.contrib import admin
from .models import User,Patient,Requests,CardiacRequested
# Register your models here.
admin.site.register(User)
admin.site.register(Patient)
admin.site.register(Requests)
admin.site.register(CardiacRequested)