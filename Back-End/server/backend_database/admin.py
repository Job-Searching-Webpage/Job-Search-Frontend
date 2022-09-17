from django.contrib import admin

from .models import spotlights, teams, esperienze, backUpPerson, degrees, jobs, dipendenti_user

# Register your models here.

admin.site.register(spotlights)
admin.site.register(teams)
admin.site.register(esperienze)
admin.site.register(backUpPerson)
admin.site.register(degrees)
admin.site.register(jobs)
admin.site.register(dipendenti_user)



