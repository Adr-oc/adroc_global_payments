# -*- coding: utf-8 -*-
{
    'name': "Adroc Global Payments",
    'summary': """
        Módulo para gestión de pagos globales y agrupados""",
    'description': """
        Módulo para gestión de pagos globales y agrupados
        - Wizard para cargar pagos masivos desde archivo Excel
        - Botones personalizados en la vista de pagos
        - Generación de pagos individuales y agrupados
    """,
    'author': "AppSystems, S.A.",
    'website': "http://www.sistemas.com.gt",
    'category': 'Accounting',
    'version': '19.0.1.0.0',
    'license': 'OPL-1',
    'depends': ['account', 'purchase', 'sale'],
    'data': [
        'security/ir.model.access.csv',
        'views/payment_wizard_views.xml',
        'views/account_payment_views.xml',
    ],
    'assets': {
        'web.assets_backend': [
            '/adroc_global_payments/static/src/js/grouped_payment.js',
            '/adroc_global_payments/static/src/xml/grouped_payment.xml',
        ],
    },
    'auto_install': False,
    'installable': True,
}

