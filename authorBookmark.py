import AO3
import json

user = AO3.User("SilverLinedBlue") #SilverLinedBlue # getting the author that we desire to trawl through bookmarks for
bookmarks = user.get_bookmarks() # gets the bookmarks but sometimes runs into an error, so returns None
bookmarks = list(filter(lambda item: item is not None, bookmarks)) # filter out the None values before we proceed
completeStatus = filter(lambda work: work.complete is True, bookmarks)
completeStatusIDs = [work.id for work in completeStatus]

json_string = json.dumps(completeStatusIDs)
print(json_string)