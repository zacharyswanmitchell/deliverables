from django.db import models
from django.urls import reverse
from datetime import date

MEALS = (
  ('B', 'Breakfast'),
  ('L', 'Lunch'),
  ('D', 'Dinner'),
)


# Create your models here.
class Toy(models.Model):
  name = models.CharField(max_length=50)
  color = models.CharField(max_length=20)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('toys_detail', kwargs={'pk': self.id})

class Bob(models.Model):
  name = models.CharField(max_length=100)
  type = models.CharField(max_length=100)
  description = models.TextField(max_length=250)
  age = models.IntegerField()
  # Create a M:M relationship with Toy
  # toys is the Related Manager
  toys = models.ManyToManyField(Toy)

  def __str__(self):
    return f'{self.name} ({self.id})'

  def get_absolute_url(self):
    return reverse('detail', kwargs={'bob_id': self.id})

  def fed_for_today(self):
    return self.feeding_set.filter(date=date.today()).count() >= len(MEALS)


class Feeding(models.Model):
  date = models.DateField('Feeding Date')
  meal = models.CharField(
    max_length=1,
    choices=MEALS,
    default=MEALS[0][0]
  )
  # Create a bob_id FK
  bob = models.ForeignKey(
    Bob,
    on_delete=models.CASCADE
  )

  def __str__(self):
    return f"{self.get_meal_display()} on {self.date}"

  class Meta:
    ordering = ['-date']