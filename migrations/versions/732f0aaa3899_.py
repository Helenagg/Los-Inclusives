"""empty message

Revision ID: 732f0aaa3899
Revises: fa5c90e6176a
Create Date: 2022-12-14 20:00:08.481989

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '732f0aaa3899'
down_revision = 'fa5c90e6176a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('hijo',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('nombre', sa.String(length=80), nullable=False),
    sa.Column('apellidos', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pictograma',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('categoria', sa.String(length=250), nullable=False),
    sa.Column('url', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('agenda',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dias_semana', sa.String(length=30), nullable=False),
    sa.Column('momentos_del_dia', sa.String(length=30), nullable=False),
    sa.Column('pictograma_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['pictograma_id'], ['pictograma.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.drop_table('pictogramas')
    op.drop_table('hijos')
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('user_hijos_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'hijo', ['hijos_id'], ['id'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('user_hijos_id_fkey', 'hijos', ['hijos_id'], ['id'])

    op.create_table('hijos',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('nombre', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('apellidos', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('dia_semana', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('momento_dia', sa.VARCHAR(length=80), autoincrement=False, nullable=False),
    sa.Column('pictogramas_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['pictogramas_id'], ['pictogramas.id'], name='hijos_pictogramas_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='hijos_pkey')
    )
    op.create_table('pictogramas',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('description', sa.VARCHAR(length=250), autoincrement=False, nullable=False),
    sa.Column('url', sa.VARCHAR(length=200), autoincrement=False, nullable=False),
    sa.PrimaryKeyConstraint('id', name='pictogramas_pkey')
    )
    op.drop_table('agenda')
    op.drop_table('pictograma')
    op.drop_table('hijo')
    # ### end Alembic commands ###