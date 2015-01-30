# convincingness - Playing with d3 and exploring the CitiBike dataset
# Emily Wang
# January 30, 2015

# Thi script will read the specified CitiBike csv files, convert 
# it into JSON, and then save the JSON files in the same directory 
# as this script. 

# Reference(s): 
# http://pandas.pydata.org/pandas-docs/dev/generated/pandas.DataFrame.to_json.html

# This JSON'd data will then be used for d3 visualizations. 

import pandas as pd 
import os

data_months = ['CitiBikeJulySept2014', 'CitiBikeFebruary2014']

for dataset in data_months:
    datapath = os.path.join(os.path.abspath('.'), 'data/%s.csv' % dataset)
    df = pd.read_csv(datapath)
    df.to_json("%s.json" % dataset)