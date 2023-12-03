# Generated by Django 4.2.7 on 2023-11-29 11:32

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='CreateEvent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('eventOwnerName', models.CharField(max_length=25, unique=True)),
                ('eventTitle', models.CharField(max_length=200)),
                ('eventDate', models.DateField()),
                ('eventTime', models.TimeField()),
                ('totalSeat', models.IntegerField()),
                ('eventLocation', models.CharField(max_length=250)),
                ('eventDescription', models.TextField()),
                ('eventCreatedDate', models.DateTimeField(auto_now_add=True)),
                ('eventModifyDate', models.DateTimeField(auto_now=True)),
                ('eventUser', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='EventRegistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=25)),
                ('lastName', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=50)),
                ('phoneNumber', models.CharField(max_length=14)),
                ('totalPerson', models.IntegerField()),
                ('createDate', models.DateTimeField(auto_now_add=True)),
                ('modifyDate', models.DateTimeField(auto_now=True)),
                ('event', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='event', to='event.createevent')),
                ('userE', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
