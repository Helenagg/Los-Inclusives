"""empty message

Revision ID: 9ab13317b368
Revises: 6f833eeee5d5
Create Date: 2023-01-10 08:39:00.027552

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9ab13317b368'
down_revision = '6f833eeee5d5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('pictogramas',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('categoria', sa.String(length=250), nullable=False),
    sa.Column('descripcion', sa.String(length=250), nullable=False),
    sa.Column('url', sa.String(length=200), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('nombre', sa.String(length=80), nullable=False),
    sa.Column('apellidos', sa.String(length=80), nullable=False),
    sa.Column('telefono', sa.Integer(), nullable=True),
    sa.Column('direccion', sa.String(length=80), nullable=True),
    sa.Column('is_parents', sa.Boolean(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('telefono')
    )
    op.create_table('agenda',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dias_semana', sa.String(length=200), nullable=False),
    sa.Column('momentos_del_dia', sa.String(length=200), nullable=False),
    sa.Column('nombre', sa.String(length=80), nullable=False),
    sa.Column('apellidos', sa.String(length=80), nullable=False),
    sa.Column('pictogramas_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['pictogramas_id'], ['pictogramas.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('agenda')
    op.drop_table('user')
    op.drop_table('pictogramas')
    # ### end Alembic commands ###
