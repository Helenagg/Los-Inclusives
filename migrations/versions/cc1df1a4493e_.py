"""empty message

Revision ID: cc1df1a4493e
Revises: 09361d5b6834
Create Date: 2022-12-16 19:51:32.022844

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cc1df1a4493e'
down_revision = '09361d5b6834'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('mensajeria')
    with op.batch_alter_table('agenda', schema=None) as batch_op:
        batch_op.alter_column('dias_semana',
               existing_type=sa.VARCHAR(length=30),
               type_=sa.String(length=200),
               existing_nullable=False)
        batch_op.alter_column('momentos_del_dia',
               existing_type=sa.VARCHAR(length=30),
               type_=sa.String(length=200),
               existing_nullable=False)

    with op.batch_alter_table('pictogramas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('descripcion', sa.String(length=250), nullable=False))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pictogramas', schema=None) as batch_op:
        batch_op.drop_column('descripcion')

    with op.batch_alter_table('agenda', schema=None) as batch_op:
        batch_op.alter_column('momentos_del_dia',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=30),
               existing_nullable=False)
        batch_op.alter_column('dias_semana',
               existing_type=sa.String(length=200),
               type_=sa.VARCHAR(length=30),
               existing_nullable=False)

    op.create_table('mensajeria',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('user_emisor', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('mensaje', sa.VARCHAR(length=2000), autoincrement=False, nullable=False),
    sa.ForeignKeyConstraint(['user_emisor'], ['user.id'], name='mensajeria_user_emisor_fkey'),
    sa.PrimaryKeyConstraint('id', name='mensajeria_pkey')
    )
    # ### end Alembic commands ###
