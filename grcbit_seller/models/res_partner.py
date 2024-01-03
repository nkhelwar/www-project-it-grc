# -*- coding: utf-8 -*-
import logging
import re
import random
import string

from odoo import api, fields, models, _
from odoo.exceptions import UserError, ValidationError, AccessError

_logger = logging.getLogger(__name__)

class ResPartnerGRC(models.Model):
    _inherit = 'res.partner'

    client_system = fields.Char(string="Client system name")
    state = fields.Selection([
        ('pending','Pending'),
        ('approved','Approved'),
        ('active','Active'),
        ('inactive','Inactive'),
    ], string="Status", default=lambda x : x.get_state_bygroup())
    activate_date = fields.Date(string="Activate date")
    db_postgres_port = fields.Char(string="DB Postgres Port (5432)", default= lambda x: x._set_default_port('db_postgres_port', int(1000), int(5000))) # de 1000 a 5000
    # db_ssh_port = fields.Char(string="DB SSH Port")
    postgres_pwd = fields.Char(string="Postgres/ZTrust Password", default=lambda x:x._default_password('postgres'))
    xdr_pwd = fields.Char(string="XDR Password", default=lambda x:x._default_password('xdr'))
    grc_web_port = fields.Char(string="GRC Web Port (8069)", default= lambda x: x._set_default_port('grc_web_port', int(5000), int(9000))) #de 5000 a 9000
    # grc_ssh_port = fields.Char(string="GRC SSH Port")
    grc_container_id = fields.Char(string="GRC Container ID")
    psql_container_id = fields.Char(string="PSQL Container ID")
    xdr_index_container = fields.Char(string="XDR Indexer Container ID")
    xdr_server_container = fields.Char(string="XDR Server Container ID")
    xdr_dash_container = fields.Char(string="XDR Dashboard Container ID")

    xdr_indexer_port = fields.Char(string="XDR Indexer Port (9200)",default=lambda c: c._set_little_princess_field())# default= lambda x: x._set_default_port('xdr_indexer_port', int(9000), int(13000))) #de 9000 a 13000
    xdr_dashboard_port = fields.Char(string="XDR Dashboard Port (5601)", default= lambda x: x._set_default_port('xdr_dashboard_port', int(13000), int(17000))) # de 13000 a 17000
    xdr_dashboard_port2 = fields.Char(string="XDR Dashboard Port (5602)", default= lambda x: x._set_default_port('xdr_dashboard_port2', int(33000), int(37000))) # de 33000 a 37000

    xdr_manager_port1 = fields.Char(string="XDR Manager Port (1514)", default= lambda x: x._set_default_port('xdr_manager_port1', int(17000), int(21000))) #de 17000 a 21000
    xdr_manager_port2 = fields.Char(string="XDR Manager Port (1515)", default= lambda x: x._set_default_port('xdr_manager_port2', int(21000), int(25000))) #de 21000 a 25000
    xdr_manager_port3 = fields.Char(string="XDR Manager Port (514/udp)", default= lambda x: x._set_default_port('xdr_manager_port3', int(25000), int(29000))) #de 25000 a 29000
    xdr_manager_port4 = fields.Char(string="XDR Manager Port (55000)", default= lambda x: x._set_default_port('xdr_manager_port4', int(29000), int(33000))) #de 29000 a 33000

    #ZITI PORTS
    ziti_controller_port1 = fields.Char(string="Ziti Controller Port (1280)", default= lambda x: x._set_default_port('ziti_controller_port1', int(37000), int(41000))) # de 37000 a 41000 
    xiti_controller_port2 = fields.Char(string="Ziti Controller Port (6262)", default= lambda x: x._set_default_port('xiti_controller_port2', int(41000), int(45000))) # de 41000 a 45000 
    ziti_edge_router1 = fields.Char(string="Ziti Edge Router (3022)", default= lambda x: x._set_default_port('ziti_edge_router1', int(45000), int(49000))) # de 45000 a 49000 
    ziti_edge_router2 = fields.Char(string="Ziti Edge Router (10080)", default= lambda x: x._set_default_port('ziti_edge_router2', int(49000), int(53000))) # de 49000 a 53000 
    ziti_console = fields.Char(string="Ziti Console (8443)", default= lambda x: x._set_default_port('ziti_console', int(53000), int(57000))) # de 53000 a 57000 
    xdr_zt = fields.Char(string="XDR ZT", default= lambda x: x._set_default_port('xdr_zt', int(57000), int(60000))) #57000 a 60000
    dns_domain = fields.Char(string="DNS Domain", default=lambda x:x.get_dns_domain())
    is_openziti = fields.Boolean(string="OpenZiti", default=True)

    endpoints = fields.Selection([
        ('up50','Up to 50'),
        ('up100','Up to 100'),
        ('up150','Up to 150'),
        ('up200','Up to 200'),
        ('up250','Up to 250'),
    ], string="End Points")
    network = fields.Char(string="Network")
    ztrust_console = fields.Char(string="ZTrust Console")
    ztrust_router = fields.Char(string="ZTrust Router")
    ztrust_controller = fields.Char(string="ZTrust Controller")
    reseller_create = fields.Many2one('res.users', string="Reseller", default=lambda s: s.self.env.user)
    

    is_admin = fields.Boolean(string="is admin", compute="_get_group", store=False)
    _sql_constraints = [
        ('unique_name','unique(display_name)','Customer name already exist.!'),
        ('unique_db_postgres_port', 'unique(db_postgres_port)', 'DB postgres Port already exist.!'),
        ('unique_grc_web_port', 'unique(grc_web_port)', 'GRC Web Port already exist.!'),
        ('unique_xdr_indexer_port', 'unique(xdr_indexer_port)', 'XDR Indexer Port already exist.!'),
        ('unique_xdr_dashboard_port', 'unique(xdr_dashboard_port)', 'XDR Dashboard Port (5601) already exist.!'),
        ('unique_xdr_dashboard_port2', 'unique(xdr_dashboard_port2)', 'XDR Dashboard Port (5602) already exist.!'),
        ('unique_xdr_manager_port1', 'unique(xdr_manager_port1)', 'XDR Manager Port (1514) already exist.!'),
        ('unique_xdr_manager_port2', 'unique(xdr_manager_port2)', 'XDR Manager Port (1515) already exist.!'),
        ('unique_xdr_manager_port3', 'unique(xdr_manager_port3)', 'XDR Manager Port (514/udp) already exist.!'),
        ('unique_xdr_manager_port4', 'unique(xdr_manager_port4)', 'XDR Manager Port (55000) already exist.!'),
        ('unique_ziti_controller_port1', 'unique(ziti_controller_port1)', 'Ziti Controller Port (1280) already exist.!'),
        ('unique_xiti_controller_port2', 'unique(xiti_controller_port2)', 'Ziti Controller Port (6262) already exist.!'),
        ('unique_ziti_edge_router1', 'unique(ziti_edge_router1)', 'Ziti Edge Router (3022) already exist.!'),
        ('unique_ziti_edge_router2', 'unique(ziti_edge_router2)', 'Ziti Edge Router (10080) already exist.!'),
        ('unique_ziti_console', 'unique(ziti_console)', 'Ziti Console (8443) already exist.!'),
        ('unique_xdr_zt', 'unique(xdr_zt)', 'XDR ZT already exist.!'),
    ]

    def unlink(self):
        res = super(ResPartnerGRC, self).unlink()
        flag = self.env.user.has_group('grcbit_seller.group_admin_seller')
        if flag == False:
            raise ValidationError("You don't have permissions to delete clients.!")
        return res
    
    def get_state_bygroup(self):
        flag = self.env.user.has_group('grcbit_seller.group_user_seller_alt')
        if flag == True:
            return 'approved'
        else:
            return 'pending'


    def get_dns_domain(self):
        text_base = self.env.company.dns_domain
        partner = self.env['res.partner'].search([('dns_domain','!=','')], limit=1, order="create_date DESC")
        if not partner:
            value = text_base + '1'
        else:
            letters = partner.dns_domain.rstrip('0123456789')
            numbers = partner.dns_domain[len(letters):]
            value = text_base + str(int(numbers) + 1)

        return value

    def _set_little_princess_field(self):
        partners = self.env['res.partner'].search([('xdr_indexer_port','>=',9000)], order="xdr_indexer_port DESC")
        if not partners:
            return 9000
        else:
            val = int(partners[0].xdr_indexer_port) + 1
            return val

    def _set_default_port(self, field, min_value, max_value):
        val = 0
        partners = self.env['res.partner'].sudo().search([(field,'>=', min_value),(field, '<=', max_value)], order="%s DESC" % field)
        if not partners:
            return min_value
        else:      
            if field == 'db_postgres_port':
                val = int(partners[0].db_postgres_port) + 1
            if field == 'grc_web_port':
                val = int(partners[0].grc_web_port) + 1
            if field == 'xdr_indexer_port':
                val = int(partners[0].xdr_indexer_port) + 1
            if field == 'xdr_dashboard_port':
                val = int(partners[0].xdr_dashboard_port) + 1
            if field == 'xdr_dashboard_port2':
                val = int(partners[0].xdr_dashboard_port2) + 1
            if field == 'xdr_manager_port1':
                val = int(partners[0].xdr_manager_port1) + 1
            if field == 'xdr_manager_port2':
                val = int(partners[0].xdr_manager_port2) + 1
            if field == 'xdr_manager_port3':
                val = int(partners[0].xdr_manager_port3) + 1
            if field == 'xdr_manager_port4':
                val = int(partners[0].xdr_manager_port4) + 1
            if field == 'ziti_controller_port1':
                val = int(partners[0].ziti_controller_port1) + 1
            if field == 'xiti_controller_port2':
                val = int(partners[0].xiti_controller_port2) + 1
            if field == 'ziti_edge_router1':
                val = int(partners[0].ziti_edge_router1) + 1
            if field == 'ziti_edge_router2':
                val = int(partners[0].ziti_edge_router2) + 1
            if field == 'ziti_console':
                val = int(partners[0].ziti_console) + 1
            if field == 'xdr_zt':
                val = int(partners[0].xdr_zt) + 1

            return val

    @api.onchange('db_postgres_port')
    def _onchange_is_admin_new(self):
        for rec in self:
            flag = self.env.user.has_group('grcbit_seller.group_admin_seller')
            rec.is_admin = flag

    def _get_group(self):
        for rec in self:
            flag = self.env.user.has_group('grcbit_seller.group_admin_seller')
            rec.is_admin = flag

    def just_range(self, field, min_value, max_value):
        for rec in self:
            if field:
                if re.search("\d+", field):
                    if int(field) >= min_value and int(field) <= max_value:
                        return True
                    else:
                        raise ValidationError("Invalid value '%s', must be in the range %s to %s" % (field, min_value, max_value))
                else:
                    raise ValidationError("Ports must be digits only. Incorrect value '%s'" % field)

    @api.onchange('name')
    def _onchange_default_client_system(self):
        for rec in self:
            if rec.name:
                rec.client_system = rec.name.replace(' ','_').lower()
            else:
                rec.client_system = ''
        
    def write(self,vals):
        res = super(ResPartnerGRC, self).write(vals)
        
        self.just_range(self.db_postgres_port, 1000, 5000)
        self.just_range(self.grc_web_port, 5000, 9000)
        self.just_range(self.xdr_indexer_port, 9000, 13000)
        self.just_range(self.xdr_dashboard_port, 13000, 17000)
        self.just_range(self.xdr_dashboard_port2, 33000, 37000)
        self.just_range(self.xdr_manager_port1, 17000, 21000)
        self.just_range(self.xdr_manager_port2, 21000, 25000)
        self.just_range(self.xdr_manager_port3, 25000, 29000)
        self.just_range(self.xdr_manager_port4, 29000, 33000)
        self.just_range(self.ziti_controller_port1, 37000, 41000)
        self.just_range(self.xiti_controller_port2, 41000, 45000)
        self.just_range(self.ziti_edge_router1, 45000, 49000)
        self.just_range(self.ziti_edge_router2, 49000, 53000)
        self.just_range(self.ziti_console, 53000, 57000)
        self.just_range(self.xdr_zt, 57000, 60000)
        return res

    def has_duplicates(self, seq):
        return len(seq) != len(set(seq))

    @api.constrains('db_postgres_port','grc_web_port','xdr_indexer_port','xdr_dashboard_port','xdr_dashboard_port2','xdr_manager_port1','xdr_manager_port2','xdr_manager_port3','xdr_manager_port4','ziti_controller_port1','xiti_controller_port2','ziti_edge_router1','ziti_edge_router2','ziti_console','xdr_zt')
    def no_repeat_ports(self):
        ports = []
        for rec in self:
            if rec.db_postgres_port:
                ports.append(rec.db_postgres_port)
            if rec.grc_web_port:
                ports.append(rec.grc_web_port)
            if rec.xdr_indexer_port:
                ports.append(rec.xdr_indexer_port)
            if rec.xdr_dashboard_port:
                ports.append(rec.xdr_dashboard_port)
            if rec.xdr_dashboard_port2:
                ports.append(rec.xdr_dashboard_port2)
            if rec.xdr_manager_port1:
                ports.append(rec.xdr_manager_port1)
            if rec.xdr_manager_port2:
                ports.append(rec.xdr_manager_port2)
            if rec.xdr_manager_port3:
                ports.append(rec.xdr_manager_port3)
            if rec.xdr_manager_port4:
                ports.append(rec.xdr_manager_port4)
            
            if rec.ziti_controller_port1:
                ports.append(rec.ziti_controller_port1)
            if rec.xiti_controller_port2:
                ports.append(rec.xiti_controller_port2)
            if rec.ziti_edge_router1:
                ports.append(rec.ziti_edge_router1)
            if rec.ziti_edge_router2:
                ports.append(rec.ziti_edge_router2)
            if rec.ziti_console:
                ports.append(rec.ziti_console)
            if rec.xdr_zt:
                ports.append(rec.xdr_zt)
            
        value = self.has_duplicates(ports)
        if value == True:
            raise ValidationError("You cannot repeat ports, check your configuration.")
        
    def _default_password(self, field):
        if field == 'postgres':
            random_pass = "".join(
                random.choices(
                    string.ascii_uppercase + string.ascii_lowercase + string.digits + "%*?-_", k=16,
                )
            )
        elif field == 'xdr':
            # random_pass = "".join(
            #     random.choices(
            #         string.ascii_uppercase + string.ascii_lowercase + string.digits + "@%*?-_", k=16,
            #     )
            # )
            random_pass = (
                [
                    random.choice("@!%*?&-_"),
                    random.choice(string.digits),
                    random.choice(string.ascii_lowercase),
                    random.choice(string.ascii_uppercase),
                ]
                + [
                    random.choice(
                        string.ascii_lowercase
                        + string.ascii_uppercase
                        + "@!%*?&-_"
                        + string.digits
                    ) for i in range(12)
                ]
            )

            random.shuffle(random_pass)
            random_pass = ''.join(random_pass)
        return random_pass

class XDRManagerPort(models.Model):
    _name = 'xdr.manager.port'

    name = fields.Char(string="Port")
    partner_id = fields.Many2one('res.partner', string="Partner")
