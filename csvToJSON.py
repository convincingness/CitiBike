# convincingness - Playing with d3 and exploring the CitiBike dataset
# Emily Wang
# January 26, 2015

# Script that will take in the CitiBike csv and convert it into JSON. 
# This JSON'd data will then be used for d3 visualizations.

# Hacky, but it could work
# Thanks to a quick google search and stackoverflow
# http://stackoverflow.com/questions/19214588/how-can-i-efficiently-move-from-a-pandas-dataframe-to-json
# http://stackoverflow.com/questions/15291153/pandas-dataframe-output-to-json

import pandas as pd 

datapath = os.path.join(os.path.abspath('.'), 'CitiBikeJulySept2014.csv')
print datapath 

df = pd.read_csv()

# csv to json code here:
