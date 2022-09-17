from django.db import models
from django.contrib.auth.models import User

# Create your models here

class spotlights(models.Model):

    id = models.AutoField(primary_key=True)
    img = models.CharField(max_length=300)
    title = models.CharField(max_length=300)
    description = models.TextField()

    def __str__(self):
        return self.title


class teams (models.Model):

    id = models.AutoField(primary_key=True)
    CF = models.CharField(max_length=300)
    name = models.CharField(max_length=300)
    cognome = models.CharField(max_length=300)
    dataNascita = models.CharField(max_length=300)
    birthplace = models.CharField(max_length=300)
    nazionalita = models.CharField(max_length=300)
    address = models.CharField(max_length=300)
    jobType = models.CharField(max_length=300)
    period = models.CharField(max_length=300)
    phone = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    languages = models.TextField()
    patenta = models.CharField(max_length=300)
    car = models.BooleanField()
    qualification = models.CharField(max_length=300)


    def __str__(self):
        return self.name + " " + self.cognome

    
class esperienze(models.Model):
    
    id = models.AutoField(primary_key=True)
    azienda = models.CharField(max_length=300)
    periodo = models.CharField(max_length=300)
    duties = models.CharField(max_length=300)
    luogo = models.CharField(max_length=300)
    payment = models.CharField(max_length=300)


    def __str__(self):
        return self.azienda

    

class backUpPerson(models.Model):

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=300)
    cognome = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    phone = models.CharField(max_length=300)

    def __str__(self):
        return self.name

    
class degrees (models.Model):

    id = models.AutoField(primary_key=True)
    degree = models.CharField(max_length=300)
  
    def __str__(self):
        return self.degree

    
class jobs (models.Model):

    id = models.AutoField(primary_key=True)
    
    title = models.CharField(max_length=300)
    organization = models.CharField(max_length=300)
    degree = models.CharField(max_length=300)
    jobType = models.CharField(max_length=300)
    location = models.CharField(max_length=300)
    minimumQualifications = models.TextField()
    preferredQualifications = models.TextField()
    description = models.TextField()
    dateAdded = models.CharField(max_length=300)

    def __str__(self):
        return self.title



class dipendenti_user(models.Model):
    # here we have the user that will be used to login to the admin panel
    user = models.OneToOneField(User ,null = True, on_delete=models.CASCADE)

    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=300)
    cognome = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    psw = models.CharField(max_length=300)
    
    def __str__(self):
        return self.name