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

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:duykhanh12345@localhost/nailsapp'

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
    
    services = db.Column(db.String(50) , nullable = False)

    name_cat = db.Column(db.String(50) , nullable = False)
    
    def __init__ (self , services,  name_cat):
        
        self.services = services
        
        self.name_cat = name_cat
        
        
class categorySchema(marsh.Schema):
    
    class Meta:
        
        fields = ('id' , 'name_cat')
        
class productSchema(marsh.Schema):
    
    class Meta:
        
        fields = ('id' ,'services' , 'name_cat')


cat_sches = categorySchema()

cat_sche = categorySchema(many = True)

pro_sches = productSchema()

pro_sche = productSchema(many = True)

        
@app.route('/get_data' , methods = ['GET'])
def get_data():
    
    category_list = category.query.all()
    
    list_json = cat_sche.dump(category_list)
    
    print(list_json)
    
    return jsonify(list_json)


@app.route('/get_data_services/<int:id>' , methods = ['GET'])
def get_data_services(id):
    
    services = product.query.filter_by(cat_id = id).all()
    
    list_json = pro_sche.dump(services)
    
    print(list_json)
    
    return jsonify(list_json)


@app.route('/delete/<id>/' , methods = ['DELETE'])
def delete_item(id):
    
    items = category.query.filter_by(id = id).first()
    
    db.session.delete(items)
    
    db.session.commit()
    
    return cat_sches.jsonify(items)


@app.route('/update/<id>/' , methods = ['PUT'])
def update_data(id):
    
    item_data = category.query.filter_by(id = id).first()
    
    title = request.json['title']
    
    item_data.name_cat = title 
    
    db.session.commit()
    
    return cat_sches.jsonify(item_data)
    
    
    
            
############################

if __name__ == '__main__':
    
    app.run(host='localhost' , port=3000 , debug = True)