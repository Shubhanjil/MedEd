from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User

# Register your models here.

class CustomUserAdmin(UserAdmin):
    # This tells Django: "Add a new section called 'Role & Security' to the user page"
    # and put our custom fields inside it.
    fieldsets = UserAdmin.fieldsets + (
        ('Role & Security', {'fields': ('is_student', 'is_teacher', 'must_change_password')}),
    )

admin.site.register(User, CustomUserAdmin)