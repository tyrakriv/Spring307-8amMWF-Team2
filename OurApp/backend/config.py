
class Config(object):
   """ Any common configurations will go here """

class DevelopmentConfig(Config):
   """ Add any more """
   DEBUG = True
   SQLALCHEMY_ECHO = True

class ProductionConfig(Config):
   """ Add any more """
   DEBUG = False

app_config = {
   'development': DevelopmentConfig,
   'production': ProductionConfig
}

