#!/bin/bash

# takes one command lien argument, the graph data name, to be passed into the python scripts

echo 'decomposition-to-graph-layer.py'
python decomposition-to-graph-layer.py -data $1
echo'\n'

echo 'graph-layer-add-node-peels.py'
python graph-layer-add-node-peels.py -data $1
echo'\n'

echo 'gather-statistics.py'
python gather-statistics.py -data $1