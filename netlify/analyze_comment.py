import json
from nltk.sentiment import SentimentIntensityAnalyzer

# Initialize sentiment analyzer
sia = SentimentIntensityAnalyzer()

def handler(event, context):
    # Get the comment from the request
    data = json.loads(event['body'])
    comment = data.get('comment', '')

    # Analyze sentiment
    sentiment = sia.polarity_scores(comment)

    # Return the sentiment analysis as JSON
    return {
        'statusCode': 200,
        'body': json.dumps(sentiment)
    }
