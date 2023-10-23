
import React from 'react'

import  ScrollArea   from  './scroll-area';

const Body = () => {
  return (
    <ScrollArea  className='h-96 max-w-2xl rounded-md border'>
      <div className='p-4'>
        <p className='text-white '>Two-dimensional, size-mutable, potentially heterogeneous tabular data.</p> <br/>
        <p className='text-white'>Data structure also contains labeled axes (rows and columns). <br/>
Arithmetic operations align on both row and column labels. Can be <br/>
thought of as a dict-like container for Series objects. The primary <br/>
pandas data structure.</p> <br/>

<p  className='text-white'>
Parameters
</p>
<p className='text-white'>----------</p>
<p className='text-white'>data : ndarray (structured or homogeneous), Iterable, dict, or DataFrame <br/>
&nbsp; &nbsp; &nbsp; Dict can contain Series, arrays, constants, dataclass or list-like objects. If <br/>
&nbsp; &nbsp; &nbsp;  data is a dict, column order follows insertion-order. If a dict contains Series <br/>
&nbsp; &nbsp; &nbsp; which have an index defined, it is aligned by its index.</p> <br/>
    <p className='text-white'>
    &nbsp; &nbsp; &nbsp;   .. versionchanged:: 0.25.0 <br/>
    &nbsp; &nbsp; &nbsp; &nbsp; If data is a list of dicts, column order follows insertion-order. <br/>
    </p>
    <p className='text-white'>index : Index or array-like <br/>
    &nbsp; &nbsp; &nbsp; Index to use for resulting frame. Will default to RangeIndex if <br/>
    &nbsp; &nbsp; &nbsp; no indexing information part of input data and no index provided. <br/>
</p>
<p className='text-white'>columns : Index or array-like <br/>
    Column labels to use for resulting frame when data does not have them, <br/>
    &nbsp; &nbsp; &nbsp; defaulting to RangeIndex(0, 1, 2, ..., n). If data contains column labels, <br/>
    &nbsp; &nbsp; &nbsp; will perform column selection instead.
</p>
<p className='text-white'>dtype : dtype, default None <br/>
&nbsp; &nbsp; &nbsp; Data type to force. Only a single dtype is allowed. If None, infer.
    </p>
    <p className='text-white'>copy : bool or None, default None <br/>
    &nbsp; &nbsp; &nbsp; Copy data from inputs. <br/>
    &nbsp; &nbsp; &nbsp; For dict data, the default of None behaves like ``copy=True``.  For DataFrame <br/>
    &nbsp; &nbsp; &nbsp; or 2d ndarray input, the default of None behaves like ``copy=False``. <br/>
    &nbsp; &nbsp; &nbsp; If data is a dict containing one or more Series (possibly of different dtypes), <br/>
    &nbsp; &nbsp; &nbsp; ``copy=False`` will ensure that these inputs are not copied. <br/>

    &nbsp; &nbsp; &nbsp; .. versionchanged:: 1.3.0
</p>
<p className='text-white'>See Also <br/>
-------- <br/>
DataFrame.from_records : Constructor from tuples, also record arrays. <br/>
DataFrame.from_dict : From dicts of Series, arrays, or dicts. <br/>
read_csv : Read a comma-separated values (csv) file into DataFrame. <br/>
read_table : Read general delimited file into DataFrame. <br/>
read_clipboard : Read text from clipboard into DataFrame.</p>

<p className='text-white'>Notes <br/>
----- <br/>
Please reference the :ref:`User Guide basics.dataframe` for more information.</p> <br/>

<pre className="text-white">
        Examples <br/>
        -------- <br/>
        Constructing DataFrame from a dictionary. <br/>
        <br/>


        {'>>> d = {\'col1\': [1, 2], \'col2\': [3, 4]}'}<br/>
        {'>>> df = pd.DataFrame(data=d)'} <br/>
        {'>>> df'} <br/>
        {'   col1  col2'} <br/>
        {'0     1     3'} <br/>
        {'1     2     4'}<br/>
        <br/>
        Notice that the inferred dtype is int64. <br/>
        <br/>
        {'>>> df.dtypes'} <br/>
        {'col1    int64'} <br/>
        {'col2    int64'} <br/>
        {'dtype: object'} <br/>
      </pre> <br/>


    <pre className="text-white">
      {`
To enforce a single dtype: <br/>

>>> df = pd.DataFrame(data=d, dtype=np.int8) <br/>
>>> df.dtypes
col1    int8
col2    int8
dtype: object

Constructing DataFrame from a dictionary including Series:

>>> d = {'col1': [0, 1, 2, 3], 'col2': pd.Series([2, 3], index=[2, 3])}
>>> pd.DataFrame(data=d, index=[0, 1, 2, 3])
   col1  col2
0     0   NaN
1     1   NaN
2     2   2.0
3     3   3.0
      `}
    </pre>

    <pre className="text-white">
      {`
Constructing DataFrame from numpy ndarray:

>>> df2 = pd.DataFrame(np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]]),
...                    columns=['a', 'b', 'c'])
>>> df2
   a  b  c
0  1  2  3
1  4  5  6
2  7  8  9
      `}
    </pre>

    <pre className="text-white">
      {`
Constructing DataFrame from a numpy ndarray that has labeled columns:

>>> data = np.array([(1, 2, 3), (4, 5, 6), (7, 8, 9)],
...                 dtype=[("a", "i4"), ("b", "i4"), ("c", "i4")])
>>> df3 = pd.DataFrame(data, columns=['c', 'a'])
...
>>> df3
   c  a
0  3  1
1  6  4
2  9  7
      `}
    </pre>

    <pre className="text-white">
      {`
Constructing DataFrame from dataclass:

>>> from dataclasses import make_dataclass
>>> Point = make_dataclass("Point", [("x", int), ("y", int)])
>>> pd.DataFrame([Point(0, 0), Point(0, 3), Point(2, 3)])
   x  y
0  0  0
1  0  3
2  2  3
      `}
    </pre>



    </div>
    </ScrollArea>
  )
}

export default Body