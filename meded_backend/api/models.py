from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    # These fields let us identify who is who
    is_student = models.BooleanField(default=False)
    is_teacher = models.BooleanField(default=False)
    
    # This field enforces the password change on first login
    must_change_password = models.BooleanField(default=True)

    def __str__(self):
        return self.username