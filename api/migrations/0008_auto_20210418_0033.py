# Generated by Django 3.1.7 on 2021-04-17 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_requests_remarksfromconsultant'),
    ]

    operations = [
        migrations.AlterField(
            model_name='requests',
            name='remarksfromconsultant',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
    ]
