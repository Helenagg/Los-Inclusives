"""empty message

Revision ID: 07510e79dcb1
Revises: f39dd078782d
Create Date: 2022-12-15 15:12:17.596631

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '07510e79dcb1'
down_revision = 'f39dd078782d'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('mensajeria',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_emisor', sa.Integer(), nullable=True),
    sa.Column('mensaje', sa.String(length=2000), nullable=False),
    sa.ForeignKeyConstraint(['user_emisor'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mensajeria')
    # ### end Alembic commands ###
