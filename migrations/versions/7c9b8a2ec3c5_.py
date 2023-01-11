"""empty message

Revision ID: 7c9b8a2ec3c5
Revises: 8950fac1c4be
Create Date: 2023-01-09 18:35:18.677811

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7c9b8a2ec3c5'
down_revision = '8950fac1c4be'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('agenda', schema=None) as batch_op:
        batch_op.add_column(sa.Column('pictogramas_url', sa.String(), nullable=True))
        batch_op.drop_constraint('agenda_pictogramas_id_fkey', type_='foreignkey')
        batch_op.create_foreign_key(None, 'pictogramas', ['pictogramas_url'], ['url'])
        batch_op.drop_column('pictogramas_id')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('agenda', schema=None) as batch_op:
        batch_op.add_column(sa.Column('pictogramas_id', sa.INTEGER(), autoincrement=False, nullable=True))
        batch_op.drop_constraint(None, type_='foreignkey')
        batch_op.create_foreign_key('agenda_pictogramas_id_fkey', 'pictogramas', ['pictogramas_id'], ['id'])
        batch_op.drop_column('pictogramas_url')

    # ### end Alembic commands ###
