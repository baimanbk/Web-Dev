# create_initial_data.py
from django.core.management.base import BaseCommand
from myapp.models import Category, Product

class Command(BaseCommand):
    help = 'Creates initial data in the database'

    def handle(self, *args, **options):
        # Create a new category
        category = Category.objects.create(name='Electronics')

        # Create a new product
        product = Product.objects.create(
            name='Smartphone',
            price=999.99,
            description='A powerful smartphone with advanced features.',
            count=100,
            is_active=True
        )

        self.stdout.write(self.style.SUCCESS('Successfully created initial data'))
