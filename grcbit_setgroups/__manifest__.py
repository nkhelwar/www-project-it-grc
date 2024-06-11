# -*- coding: utf-8 -*-
{
    'name': 'GRCBIT Set Groups',
    'version': '16.0',
    'description': 'This module add seccion to add access rights',
    'author':"grc4ciso",
    'website': "https://grc4ciso.com/",
    'license': 'OPL-1',
    'depends': [
        'base'
    ],
    'data': [
        'security/res_groups.xml',
        'security/ir.model.access.csv',
        'views/res_users_views.xml',
        'wizard/set_groups_views.xml',
    ],

    'auto_install': False,
    'application': False,

}