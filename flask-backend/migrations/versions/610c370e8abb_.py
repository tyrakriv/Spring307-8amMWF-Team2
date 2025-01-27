"""empty message

Revision ID: 610c370e8abb
Revises: dd32548e3ea0
Create Date: 2020-05-12 19:50:38.505762

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '610c370e8abb'
down_revision = 'dd32548e3ea0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('journals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=True),
    sa.Column('body', sa.String(length=8000), nullable=True),
    sa.Column('date_created', sa.DateTime(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_journals_date_created'), 'journals', ['date_created'], unique=False)
    op.create_index(op.f('ix_journals_title'), 'journals', ['title'], unique=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index(op.f('ix_journals_title'), table_name='journals')
    op.drop_index(op.f('ix_journals_date_created'), table_name='journals')
    op.drop_table('journals')
    # ### end Alembic commands ###
