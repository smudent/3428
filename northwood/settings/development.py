# Python imports
from os.path import join

# project imports
from .common import *

# uncomment the following line to include i18n
# from .i18n import *


# ##### DEBUG CONFIGURATION ###############################
DEBUG = True

# allow all hosts during development
ALLOWED_HOSTS = ['*']

# ##### DATABASE CONFIGURATION ############################
DATABASES = {
    'default': {
        'NAME': 'northdb',
        'USER': 'root',
        'PASSWORD': 'devpasswordhere',
        'HOST': 'localhost',
        'PORT': 3306,
        'ENGINE': 'django.db.backends.mysql',
    }
}

# ##### APPLICATION CONFIGURATION #########################

INSTALLED_APPS = DEFAULT_APPS
