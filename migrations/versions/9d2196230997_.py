"""empty message

Revision ID: 9d2196230997
Revises: 05f0af4206f2
Create Date: 2020-09-16 22:42:59.913388

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9d2196230997'
down_revision = '05f0af4206f2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('question', sa.Column('questiontitle', sa.Text(), nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('question', 'questiontitle')
    # ### end Alembic commands ###
