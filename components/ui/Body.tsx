import React from 'react'
import { ScrollArea }  from  './scroll-area';

const Body = () => {
  return (
    <ScrollArea  className='h-96 max-w-2xl rounded-md border'>
      <div className='p-4'>
        <p className='text-white'>Two-dimensional, size-mutable, potentially heterogeneous tabular data.</p>
        <p className='text-white'>Data structure also contains labeled axes (rows and columns). <br/>
Arithmetic operations align on both row and column labels. Can be <br/>
thought of as a dict-like container for Series objects. The primary <br/>
pandas data structure.</p>

<p  className='text-white'>
Parameters
</p>
<p className='text-white'>----------</p>
<p className='text-white'>data : ndarray (structured or homogeneous), Iterable, dict, or DataFrame <br/>
    Dict can contain Series, arrays, constants, dataclass or list-like objects. If <br/>
    data is a dict, column order follows insertion-order. If a dict contains Series <br/>
    which have an index defined, it is aligned by its index.</p>
    <p className='text-white'>
    .. versionchanged:: 0.25.0 <br/>
       If data is a list of dicts, column order follows insertion-order. <br/>
    </p>
    <p className='text-white'>index : Index or array-like <br/>
    Index to use for resulting frame. Will default to RangeIndex if <br/>
    no indexing information part of input data and no index provided. <br/>
</p>
<p className='text-white'>columns : Index or array-like <br/>
    Column labels to use for resulting frame when data does not have them, <br/>
    defaulting to RangeIndex(0, 1, 2, ..., n). If data contains column labels, <br/>
    will perform column selection instead.
</p>
<p className='text-white'>dtype : dtype, default None <br/>
    Data type to force. Only a single dtype is allowed. If None, infer.
    </p>
    <p className='text-white'>copy : bool or None, default None <br/>
    Copy data from inputs. <br/>
    For dict data, the default of None behaves like ``copy=True``.  For DataFrame <br/>
    or 2d ndarray input, the default of None behaves like ``copy=False``. <br/>
    If data is a dict containing one or more Series (possibly of different dtypes), <br/>
    ``copy=False`` will ensure that these inputs are not copied. <br/>

    .. versionchanged:: 1.3.0
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
Please reference the :ref:`User Guide basics.dataframe` for more information.</p>

<p className='text-white'>Examples
--------
Constructing DataFrame from a dictionary.

>>> d = {'col1': [1, 2], 'col2': [3, 4]} 
>>> df = pd.DataFrame(data=d)
>>> df
   col1  col2
0     1     3
1     2     4

Notice that the inferred dtype is int64.

>>> df.dtypes
col1    int64
col2    int64
dtype: object
</p>


    </div>
    </ScrollArea>
  )
}

export default Body