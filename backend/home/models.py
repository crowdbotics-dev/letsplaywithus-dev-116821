from django.conf import settings
from django.db import models
class Simao(models.Model):
    'Generated Model'
    test9 = models.CharField(max_length=255,)
    test8 = models.DecimalField(max_digits=30,decimal_places=10,)
    test7 = models.BigIntegerField()
