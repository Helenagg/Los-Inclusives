"""empty message

Revision ID: f39dd078782d
Revises: fbc532f30be9
Create Date: 2022-12-14 20:21:13.139145

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f39dd078782d'
down_revision = 'fbc532f30be9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('agenda',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('dias_semana', sa.String(length=30), nullable=False),
    sa.Column('momentos_del_dia', sa.String(length=30), nullable=False),
    sa.Column('pictogramas_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['pictogramas_id'], ['pictogramas.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    with op.batch_alter_table('hijos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('agenda_id', sa.Integer(), nullable=True))
        batch_op.drop_constraint('hijos_pictogramas_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'agenda', ['agenda_id'], ['id'])
        batch_op.drop_column('momento_dia')
        batch_op.drop_column('dia_semana')
        batch_op.drop_column('pictogramas_id')

    with op.batch_alter_table('pictogramas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('categoria', sa.String(length=250), nullable=False))
        batch_op.drop_column('description')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('pictogramas', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.VARCHAR(length=250), autoincrement=False, nullable=False))
        batch_op.drop_column('categoria')

    with op.batch_alter_table('hijos', schema=None) as batch_op:
        batch_op.add_column(sa.Column('pictogramas_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.add_column(sa.Column('dia_semana', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.add_column(sa.Column('momento_dia', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('hijos_pictogramas_id_fkey', 'pictogramas', ['pictogramas_id'], ['id'])
        batch_op.drop_column('agenda_id')

    op.drop_table('agenda')
    # ### end Alembic commands ###
