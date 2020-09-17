"""empty message

Revision ID: 3ca191de7bbc
Revises: 
Create Date: 2020-09-15 21:28:32.179932

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision = '3ca191de7bbc'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint('for_job_users_username_key', 'for_job_users', type_='unique')
    op.drop_index('ix_for_job_users_email', table_name='for_job_users')
    op.drop_column('for_job_users', 'created')
    op.drop_column('for_job_users', 'email')
    op.drop_column('for_job_users', 'username')
    op.drop_column('for_job_users', 'admin')
    op.drop_column('for_job_users', 'bio')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('for_job_users', sa.Column('bio', sa.TEXT(), autoincrement=False, nullable=True))
    op.add_column('for_job_users', sa.Column('admin', sa.BOOLEAN(), autoincrement=False, nullable=False))
    op.add_column('for_job_users', sa.Column('username', sa.VARCHAR(length=64), autoincrement=False, nullable=False))
    op.add_column('for_job_users', sa.Column('email', sa.VARCHAR(length=80), autoincrement=False, nullable=False))
    op.add_column('for_job_users', sa.Column('created', postgresql.TIMESTAMP(), autoincrement=False, nullable=False))
    op.create_index('ix_for_job_users_email', 'for_job_users', ['email'], unique=True)
    op.create_unique_constraint('for_job_users_username_key', 'for_job_users', ['username'])
    # ### end Alembic commands ###
