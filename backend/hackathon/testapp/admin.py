from django.contrib import admin
from .models import *
# Register your models here.
admin.site.register(Post)
admin.site.register(Comment)
admin.site.register(Category)
admin.site.register(Post_Like)
admin.site.register(Session)
admin.site.register(Attendee)
