"""Data models."""
from . import db

"""Data model for quiz question."""
class question(db.Model):

    __tablename__ = 'question'
    qid = db.Column(
        db.Integer,
        primary_key=True,
        unique=True,
        nullable=False,
    )
    majorid = db.Column(
        db.Integer,
        db.ForeignKey('category.majorid'),
        nullable=False,
    )
    questiontitle = db.Column(
        db.Text,
        nullable=False
    )
    questiondes = db.Column(
        db.Text,
        nullable=False
    )
    image = db.Column(
        db.LargeBinary
    )
    # Set up for ForeignKey
    question = db.relationship('category', foreign_keys=[majorid])

    def __repr__(self):
        return '<Question id {}>'.format(self.qid)

"""Data model for quiz offical answer."""
class officalanswer(db.Model):

    __tablename__ = 'officalanswer'
    qid = db.Column(
        db.Integer,
        primary_key=True,
        unique=True,
        nullable=False
    )
    majorid = db.Column(
        db.Integer,
        db.ForeignKey('category.majorid'),
        nullable=False,
    )
    answerdes = db.Column(
        db.Text,
        nullable=False
    )
    image = db.Column(
        db.LargeBinary
    )

    # Set up for ForeignKey
    offical_answer = db.relationship('category', foreign_keys=[majorid])

    def __repr__(self):
        return '<Question id {}>'.format(self.qid)

"""Data model for quiz student answer."""
class studentanswer(db.Model):

    __tablename__ = 'studentanswer'
    qid = db.Column(
        db.Integer,
        unique=True,
        nullable=False
    )
    studentid = db.Column(
        db.Integer,
        primary_key=True,
        nullable=False
    )
    majorid = db.Column(
        db.Integer,
        db.ForeignKey('category.majorid'),
        nullable=False,
        
    )
    studentans = db.Column(
        db.Text,
        nullable=False
    )
    # Set up for ForeignKey
    student_answer = db.relationship('category', foreign_keys=[majorid])

    def __repr__(self):
        return '<Question id {}>'.format(self.qid)

"""Data model for major category."""
class category(db.Model):

    __tablename__ = 'category'
    majorid = db.Column(
        db.Integer,
        primary_key=True,
        unique=True,
        nullable=False
    )
    major = db.Column(
        db.String(256),
        unique=True,
        nullable=False
    )
    # Set up for ForeignKey
    question = db.relationship('question', backref='category', lazy=True)
    offical_answer = db.relationship('officalanswer', backref='category', lazy=True)
    student_answer = db.relationship('studentanswer', backref='category', lazy=True)

    def __repr__(self):
        return '<majorid {}>'.format(self.majorid)