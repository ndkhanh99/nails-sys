from flask import Flask , redirect , render_template , jsonify, url_for, request , flash
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_login import UserMixin , AnonymousUserMixin , login_manager , login_user , logout_user
import pymysql
import json
import os
import sys
import random

app = Flask(__name__ , template_folder='templates' , static_folder= 'static')

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:123giadinh@localhost/nailsapp'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

marsh = Marshmallow(app)

db = SQLAlchemy(app)

class category(db.Model):
    
    id = db.Column(db.Integer , primary_key = True)
    
    name_cat = db.Column(db.String(50) , nullable = False)
    
    def __init__ (self , name_cat):
        
        self.name_cat = name_cat

class product(db.Model):
    
    id = db.Column(db.Integer , primary_key = True)
    
    name_cat = db.Column(db.String(50) , nullable = False)

    cat_list = db.Column(db.String(50) , nullable = False)
    
    def __init__ (self , name_cat,  cat_list):
        
        self.name_cat = name_cat
        
        self.cat_list = cat_list
        
        
class categorySchema(marsh.Schema):
    
    class Meta:
        
        fields = ('id' , 'name_cat')
        
cat_sche = categorySchema(many = True)

        
# class productSchema(marsh.Schema):
    
#     class Meta:
        
#         fields = ('id' , 'name_cat')
        
@app.route('/get_data' , methods = ['GET'])
def get_data():
    
    category_list = category.query.all()
    
    list_json = cat_sche.dump(category_list)
    
    print(list_json)
    
    return jsonify(list_json)
        
############################

if __name__ == '__main__':
    
    app.run(host='localhost' , port=3000 , debug = True)
