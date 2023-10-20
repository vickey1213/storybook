const parameterData = [
  
    {
      title: 'T',
      value: 'property',
      description: 'Property attribute.',
    },
    {
      title: 'at',
      value: 'property',
      description: 'Access a single value for a row/column label pair.',
    },
    {
      title: 'attrs',
      value: 'property',
      description: 'Dictionary of global attributes of this dataset.',
    },
    {
      title: 'axes',
      value: 'property',
      description: 'Return a list representing the axes of the DataFrame.',
    },
    {
      title: 'columns',
      value: 'AxisProperty',
      description: '	The column labels of the DataFrame.',
    },
    {
      title: 'dtypes',
      value: 'property',
      description: '	Return the dtypes in the DataFrame.',
    },
    {
      title: 'empty',
      value: 'property',
      description: '	Indicator whether Series/DataFrame is empty.',
    },
    {
      title: 'flags',
      value: 'property',
      description: '	Get the properties associated with this pandas object.',
    },
    {
      title: 'iat',
      value: 'property',
      description: '	Access a single value for a row/column pair by integer  position.',
    },
    {
      title: 'iloc',
      value: 'property',
      description: '	Purely integer-location based indexing for selection by position.',
    },
    {
      title: 'index',
      value: 'AxisProperty',
      description: '	The index (row labels) of the DataFrame.',
    },
    {
      title: 'loc',
      value: 'property',
      description: '	Access a group of rows and columns by label(s) or a boolean array..',
    },
    {
      title: 'ndim',
      value: 'property',
      description: '	Return an int representing the number of axes / array dimensions..',
    },
    {
      title: 'shape',
      value: 'property',
      description: '	Return a tuple representing the dimensionality of the DataFrame..',
    },
    {
      title: 'size',
      value: 'property',
      description: '	Return an int representing the number of elements in this object.',
    },
    {
      title: 'style',
      value: 'property',
      description: '	Returns a Styler object..',
    },
    {
      title: 'values',
      value: 'property',
      description: '	Return a Numpy representation of the DataFrame..',
    },
    {
      title: 'abs',
      value: 'function',
      description: '	Return a Series/DataFrame with absolute numeric value of each element.',
    },
    {
      title: 'add',
      value: 'function',
      description: '	Get Addition of dataframe and other, element-wise (binary operator `add`).',
    },
    {
      title: 'abs',
      value: 'function',
      description: '	Return a Series/DataFrame with absolute numeric value of each element.',
    },
    {
      title: 'add_prefix',
      value: 'function',
      description: '	Prefix labels with string `prefix`.',
    },
    {
      title: 'add_suffix',
      value: 'function',
      description: '	Suffix labels with string `suffix`.',
    },
    {
      title: 'agg',
      value: 'function',
      description: '	Aggregate using one or more operations over the specified axis.',
    },
    {
      title: 'aggregate',
      value: 'function',
      description: '	Aggregate using one or more operations over the specified axis.',
    },
    {
      title: 'align',
      value: 'function',
      description: '	Align two objects on their axes with the specified join method.',
    },
    {
      title: 'all',
      value: 'function',
      description: '	Return whether all elements are True, potentially over an axis.',
    },
    {
      title: 'any',
      value: 'function',
      description: '	Return whether any element is True, potentially over an axis.',
    },
    {
      title: 'abs',
      value: 'function',
      description: '	Return a Series/DataFrame with absolute numeric value of each element.',
    },
    {
      title: 'append',
      value: 'function',
      description: '	Append rows of `other` to the end of caller, returning a new object.',
    },
    {
      title: 'apply',
      value: 'function',
      description: '	Apply a function along an axis of the DataFrame.',
    },
    {
      title: 'applymap',
      value: 'function',
      description: '	Apply a function to a Dataframe elementwise.',
    },
    {
      title: 'asfreq',
      value: 'function',
      description: '	Convert time series to specified frequency.',
    },
    {
      title: 'asof',
      value: 'function',
      description: '	Return the last row(s) without any NaNs before `where`.',
    },
    {
      title: 'assign',
      value: 'function',
      description: '	Assign new columns to a DataFrame.',
    },
    {
      title: 'astype',
      value: 'function',
      description: '	Cast a pandas object to a specified dtype ``dtype``.',
    },
    {
      title: 'at_time',
      value: 'function',
      description: '	Select values at particular time of day (e.g., 9:30AM).',
    },
    {
      title: 'backfill',
      value: 'function',
      description: '	Synonym for :meth:`DataFrame.fillna` with ``method=bfill',
    },
    {
      title: 'between_time',
      value: 'function',
      description: '	Select values between particular times of the day (e.g., 9:00-9:30 AM).',
    },
    {
      title: 'bfill',
      value: 'function',
      description: '	Synonym for :meth:`DataFrame.fillna` with ``method=bfill``.',
    },
    {
      title: 'bool',
      value: 'function',
      description: '	Return the bool of a single element Series or DataFrame.',
    },
    {
      title: 'boxplot',
      value: 'function',
      description: '	Make a box plot from DataFrame columns.',
    },
    {
      title: 'clip',
      value: 'function',
      description: '	Trim values at input threshold(s).',
    },
    {
      title: 'combine',
      value: 'function',
      description: '	Perform column-wise combine with another DataFrame.',
    },
    {
      title: 'combine_first',
      value: 'function',
      description: '	Update null elements with value in the same location in `other`.',
    },
    {
      title: 'compare',
      value: 'function',
      description: '	Compare to another DataFrame and show the differences.',
    },
    {
      title: 'convert_dtypes',
      value: 'function',
      description: '	Convert columns to best possible dtypes using dtypes supporting ``pd.NA``.',
    },
    {
      title: 'copy',
      value: 'function',
      description: '	Make a copy of this objects indices and data.',
    },
    {
      title: 'corr',
      value: 'function',
      description: '	Compute pairwise correlation of columns, excluding NA/null values.',
    },
    {
      title: 'corrwith',
      value: 'function',
      description: '	Compute pairwise correlation.',
    },
    {
      title: 'count',
      value: 'function',
      description: '	Count non-NA cells for each column or row.',
    },
    {
      title: 'cov',
      value: 'function',
      description: '	Compute pairwise covariance of columns, excluding NA/null values.',
    },
    {
      title: 'cummax',
      value: 'function',
      description: '	Return cumulative maximum over a DataFrame or Series axis.',
    },
    {
      title: 'cummin',
      value: 'function',
      description: '	Return cumulative minimum over a DataFrame or Series axis.',
    },
    {
      title: 'cumprod',
      value: 'function',
      description: '	Return cumulative product over a DataFrame or Series axis.',
    },
    {
      title: 'cumsum',
      value: 'function',
      description: '	Return cumulative sum over a DataFrame or Series axis.',
    },
    {
      title: 'describe',
      value: 'function',
      description: '	Generate descriptive statistics.',
    },
    {
      title: 'diff',
      value: 'function',
      description: '	First discrete difference of element.',
    },
    {
      title: 'div',
      value: 'function',
      description: '	Get Floating division of dataframe and other, element-wise (binary operator `truediv`).',
    },
    {
      title: 'divide',
      value: 'function',
      description: '	Get Floating division of dataframe and other, element-wise (binary operator `truediv`).',
    },
    {
      title: 'dot',
      value: 'function',
      description: '	Compute the matrix multiplication between the DataFrame and other.',
    },
    {
      title: 'drop',
      value: 'function',
      description: '	Drop specified labels from rows or columns.',
    },
    {
      title: 'drop_duplicates',
      value: 'function',
      description: '	Return DataFrame with duplicate rows removed.',
    },
    {
      title: 'droplevel',
      value: 'function',
      description: '	Return Series/DataFrame with requested index / column level(s) removed.',
    },
    {
      title: 'dropna',
      value: 'function',
      description: '	Remove missing values.',
    },
    {
      title: 'duplicated',
      value: 'function',
      description: '	Return boolean Series denoting duplicate rows.',
    },
    {
      title: 'eq',
      value: 'function',
      description: '	Get Equal to of dataframe and other, element-wise (binary operator `eq`).',
    },
    {
      title: 'equals',
      value: 'function',
      description: '	Test whether two objects contain the same elements.',
    },
    {
      title: 'eval',
      value: 'function',
      description: '	Evaluate a string describing operations on DataFrame columns.',
    },
    {
      title: 'ewm',
      value: 'function',
      description: '	Provide exponentially weighted (EW) calculations.',
    },
    {
      title: 'expanding',
      value: 'function',
      description: '	Provide expanding window calculations.',
    },
    {
      title: 'explode',
      value: 'function',
      description: 'Transform each element of a list-like to a row, replicating index values.'
    },
    {
      title: 'ffill',
      value: 'function',
      description: 'Synonym for :meth:`DataFrame.fillna` with ``method=\'ffill\'``.'
    },
    {
      title: 'fillna',
      value: 'function',
      description: 'Fill NA/NaN values using the specified method.'
    },
    {
      title: 'filter',
      value: 'function',
      description: 'Subset the dataframe rows or columns according to the specified index labels.'
    },
    {
      title: 'first',
      value: 'function',
      description: 'Select initial periods of time series data based on a date offset.'
    },
    {
      title: 'first_valid_index',
      value: 'function',
      description: 'Return index for first non-NA value or None, if no non-NA value is found.'
    },
    {
      title: 'floordiv',
      value: 'function',
      description: 'Get Integer division of dataframe and other, element-wise (binary operator `floordiv`).'
    },
    {
      title: 'from_dict',
      value: 'method',
      description: 'Construct DataFrame from dict of array-like or dicts.'
    },
    {
      title: 'from_records',
      value: 'method',
      description: 'Convert structured or record ndarray to DataFrame.'
    },
    {
      title: 'ge',
      value: 'function',
      description: 'Get Greater than or equal to of dataframe and other, element-wise (binary operator `ge`).'
    },
    {
      title: 'get',
      value: 'function',
      description: 'Get item from object for given key (ex: DataFrame column).'
    },
    {
      title: 'groupby',
      value: 'function',
      description: 'Group DataFrame using a mapper or by a Series of columns.'
    },
    {
      title: 'gt',
      value: 'function',
      description: 'Get Greater than of dataframe and other, element-wise (binary operator `gt`).'
    },
    {
      title: 'head',
      value: 'function',
      description: 'Return the first `n` rows.'
    },
    {
      title: 'hist',
      value: 'function',
      description: 'Make a histogram of the DataFrame\'s columns.'
    },
    {
      title: 'idxmax',
      value: 'function',
      description: 'Return index of first occurrence of maximum over requested axis.'
    },
    {
      title: 'idxmin',
      value: 'function',
      description: 'Return index of first occurrence of minimum over requested axis.'
    },
    {
      title: 'infer_objects',
      value: 'function',
      description: 'Attempt to infer better dtypes for object columns.'
    },
    {
      title: 'info',
      value: 'function',
      description: 'Print a concise summary of a DataFrame.'
    },
    {
      title: 'insert',
      value: 'function',
      description: 'Insert column into DataFrame at specified location.'
    },
    {
      title: 'interpolate',
      value: 'function',
      description: 'Fill NaN values using an interpolation method.'
    },
    {
      title: 'isetitem',
      value: 'function',
      description: 'Set the given value in the column with position \'loc\'.'
    },
    {
      title: 'isin',
      value: 'function',
      description: 'Whether each element in the DataFrame is contained in values.'
    },
    {
      title: 'isna',
      value: 'function',
      description: 'Detect missing values.'
    },
    {
      title: 'items',
      value: 'function',
      description: 'Iterate over (column name, Series) pairs.'
    },
    {
      title: 'iteritems',
      value: 'function',
      description: 'Iterate over (column name, Series) pairs.'
    },
    {
      title: 'iterrows',
      value: 'function',
      description: 'Iterate over DataFrame rows as (index, Series) pairs.'
    },
    {
      title: 'itertuples',
      value: 'function',
      description: 'Iterate over DataFrame rows as namedtuples.'
    },
    {
      title: 'join',
      value: 'function',
      description: 'Join columns of another DataFrame.'
    },
    {
      title: 'keys',
      value: 'function',
      description: 'Get the \'info axis\' (see Indexing for more).'
    },
    {
      title: 'kurt',
      value: 'function',
      description: 'Return unbiased kurtosis over requested axis.'
    },
    {
      title: 'kurtosis',
      value: 'function',
      description: 'Return unbiased kurtosis over requested axis.'
    },
    {
      title: 'last',
      value: 'function',
      description: 'Select final periods of time series data based on a date offset.'
    },
    {
      title: 'last_valid_index',
      value: 'function',
      description: 'Return index for last non-NA value or None, if no non-NA value is found.'
    },
    {
      title: 'le',
      value: 'function',
      description: 'Get Less than or equal to of dataframe and other, element-wise (binary operator `le`).'
    },
    {
      title: 'lookup',
      value: 'function',
      description: 'Label-based "fancy indexing" function for DataFrame.'
    },
    {
      title: 'lt',
      value: 'function',
      description: 'Get Less than of dataframe and other, element-wise (binary operator `lt`).'
    },
    {
      title: 'mad',
      value: 'function',
      description: 'Return the mean absolute deviation of the values over the requested axis.'
    },
    {
      title: 'mask',
      value: 'function',
      description: 'Replace values where the condition is True.'
    },
    {
      title: 'max',
      value: 'function',
      description: 'Return the maximum of the values over the requested axis.'
    },
    {
      title: 'mean',
      value: 'function',
      description: 'Return the mean of the values over the requested axis.'
    },
    {
      title: 'median',
      value: 'function',
      description: 'Return the median of the values over the requested axis.'
    },
    {
      title: 'melt',
      value: 'function',
      description: 'Unpivot a DataFrame from wide to long format, optionally leaving identifiers set.'
    },
    {
      title: 'memory_usage',
      value: 'function',
      description: 'Return the memory usage of each column in bytes.'
    },
    {
      title: 'merge',
      value: 'function',
      description: 'Merge DataFrame or named Series objects with a database-style join.'
    },
    {
      title: 'min',
      value: 'function',
      description: 'Return the minimum of the values over the requested axis.'
    },
    {
      title: 'mod',
      value: 'function',
      description: 'Get Modulo of dataframe and other, element-wise (binary operator `mod`).'
    },
    {
      title: 'mode',
      value: 'function',
      description: 'Get the mode(s) of each element along the selected axis.'
    },
    {
      title: 'mul',
      value: 'function',
      description: 'Get Multiplication of dataframe and other, element-wise (binary operator `mul`).'
    },
    {
      title: 'multiply',
      value: 'function',
      description: 'Get Multiplication of dataframe and other, element-wise (binary operator `mul`).'
    },
    {
      title: 'ne',
      value: 'function',
      description: 'Get Not equal to of dataframe and other, element-wise (binary operator `ne`).'
    },
    {
      title: 'nlargest',
      value: 'function',
      description: 'Return the first `n` rows ordered by `columns` in descending order.'
    },
    {
      title: 'notna',
      value: 'function',
      description: 'Detect existing (non-missing) values.'
    },
    {
      title: 'notnull',
      value: 'function',
      description: 'DataFrame.notnull is an alias for DataFrame.notna.'
    },
    {
      title: 'nsmallest',
      value: 'function',
      description: 'Return the first `n` rows ordered by `columns` in ascending order.'
    },
    {
      title: 'nunique',
      value: 'function',
      description: 'Count the number of distinct elements in the specified axis.'
    },
    {
      title: 'pad',
      value: 'function',
      description: 'Synonym for :meth:`DataFrame.fillna` with ``method=\'ffill\'``.'
    },
    {
      title: 'pct_change',
      value: 'function',
      description: 'Percentage change between the current and a prior element.'
    },
    {
      title: 'pipe',
      value: 'function',
      description: 'Apply chainable functions that expect Series or DataFrames.'
    },
    {
      title: 'pivot',
      value: 'function',
      description: 'Return a reshaped DataFrame organized by given index / column values.'
    },
    {
      title: 'pivot_table',
      value: 'function',
      description: 'Create a spreadsheet-style pivot table as a DataFrame.'
    },
    {
      title: 'pop',
      value: 'function',
      description: 'Return an item and drop it from the frame. Raise an error if not found.'
    },
    {
      title: 'pow',
      value: 'function',
      description: 'Get the Exponential power of the dataframe and other, element-wise (binary operator `pow`).'
    },
    {
      title: 'prod',
      value: 'function',
      description: 'Return the product of the values over the requested axis.'
    },
    {
      title: 'product',
      value: 'function',
      description: 'Return the product of the values over the requested axis.'
    },
    {
      title: 'quantile',
      value: 'function',
      description: 'Return values at the given quantile over the requested axis.'
    },
    {
      title: 'query',
      value: 'function',
      description: 'Query the columns of a DataFrame with a boolean expression.'
    },
    {
      title: 'radd',
      value: 'function',
      description: 'Get the addition of the dataframe and other, element-wise (binary operator `radd`).'
    },
    {
      title: 'rank',
      value: 'function',
      description: 'Compute numerical data ranks (1 through n) along the axis.'
    },
    {
      title: 'rdiv',
      value: 'function',
      description: 'Get Floating division of dataframe and other, element-wise (binary operator `rtruediv`).'
    },
    {
      title: 'reindex',
      value: 'function',
      description: 'Conform Series/DataFrame to new index with optional filling logic.'
    },
    {
      title: 'reindex_like',
      value: 'function',
      description: 'Return an object with matching indices as another object.'
    },
    {
      title: 'rename',
      value: 'function',
      description: 'Alter axes labels.'
    },
    {
      title: 'rename_axis',
      value: 'function',
      description: 'Set the name of the axis for the index or columns.'
    },
    {
      title: 'reorder_levels',
      value: 'function',
      description: 'Rearrange index levels using the input order. May not drop or duplicate levels.'
    },
    {
      title: 'replace',
      value: 'function',
      description: 'Replace values given in `to_replace` with `value`.'
    },
    {
      title: 'resample',
      value: 'function',
      description: 'Resample time-series data.'
    },
    {
      title: 'reset_index',
      value: 'function',
      description: 'Reset the index or a level of it.'
    },
    {
      title: 'rfloordiv',
      value: 'function',
      description: 'Get Integer division of dataframe and other, element-wise (binary operator `rfloordiv`).'
    },
    {
      title: 'rmod',
      value: 'function',
      description: 'Get Modulo of dataframe and other, element-wise (binary operator `rmod`).'
    },
    {
      title: 'rmul',
      value: 'function',
      description: 'Get Multiplication of dataframe and other, element-wise (binary operator `rmul`).'
    },
    {
      title: 'rolling',
      value: 'function',
      description: 'Provide rolling window calculations.'
    },
    {
      title: 'round',
      value: 'function',
      description: 'Round a DataFrame to a variable number of decimal places.'
    },
    {
      title: 'rpow',
      value: 'function',
      description: 'Get Exponential power of dataframe and other, element-wise (binary operator `rpow`).'
    },
    {
      title: 'rsub',
      value: 'function',
      description: 'Get Subtraction of dataframe and other, element-wise (binary operator `rsub`).'
    },
    {
      title: 'rtruediv',
      value: 'function',
      description: 'Get Floating division of dataframe and other, element-wise (binary operator `rtruediv`).'
    },
    {
      title: 'sample',
      value: 'function',
      description: 'Return a random sample of items from an axis of the object.'
    },
    {
      title: 'select_dtypes',
      value: 'function',
      description: 'Return a subset of the DataFrame\'s columns based on the column dtypes.'
    },
    {
      title: 'sem',
      value: 'function',
      description: 'Return the unbiased standard error of the mean over the requested axis.'
    },
    {
      title: 'set_axis',
      value: 'function',
      description: 'Assign the desired index to the given axis.'
    },
    {
      title: 'set_flags',
      value: 'function',
      description: 'Return a new object with updated flags.'
    },
    {
      title: 'set_index',
      value: 'function',
      description: 'Set the DataFrame index using existing columns.'
    },
    {
      title: 'shift',
      value: 'function',
      description: 'Shift the index by the desired number of periods with an optional time `freq`.'
    },
    {
      title: 'skew',
      value: 'function',
      description: 'Return the unbiased skew over the requested axis.'
    },
    {
      title: 'slice_shift',
      value: 'function',
      description: 'Equivalent to `shift` without copying data.'
    },
    {
      title: 'sort_index',
      value: 'function',
      description: 'Sort the object by labels along an axis.'
    },
    {
      title: 'sort_values',
      value: 'function',
      description: 'Sort by the values along either axis.'
    },
    {
      title: 'squeeze',
      value: 'function',
      description: 'Squeeze 1-dimensional axis objects into scalars.'
    },
    {
      title: 'stack',
      value: 'function',
      description: 'Stack the prescribed level(s) from columns to the index.'
    },
    {
      title: 'std',
      value: 'function',
      description: 'Return the sample standard deviation over the requested axis.'
    },
    {
      title: 'sub',
      value: 'function',
      description: 'Get the subtraction of the dataframe and other, element-wise (binary operator `sub`).'
    },
    {
      title: 'subtract',
      value: 'function',
      description: 'Get the subtraction of the dataframe and other, element-wise (binary operator `sub`).'
    },
    {
      title: 'sum',
      value: 'function',
      description: 'Return the sum of the values over the requested axis.'
    },
    {
      title: 'swapaxes',
      value: 'function',
      description: 'Interchange axes and swap values axes appropriately.'
    },
    {
      title: 'swaplevel',
      value: 'function',
      description: 'Swap levels i and j in a MultiIndex.'
    },
    {
      title: 'tail',
      value: 'function',
      description: 'Return the last `n` rows.'
    },
    {
      title: 'take',
      value: 'function',
      description: 'Return the elements at the given positional indices along an axis.'
    },
    {
      title: 'to_clipboard',
      value: 'function',
      description: 'Copy the object to the system clipboard.'
    },
    {
      title: 'to_csv',
      value: 'function',
      description: 'Write the object to a comma-separated values (CSV) file.'
    },
    {
      title: 'to_dict',
      value: 'function',
      description: 'Convert the DataFrame to a dictionary.'
    },
    {
      title: 'to_excel',
      value: 'function',
      description: 'Write the object to an Excel sheet.'
    },
    {
      title: 'to_feather',
      value: 'function',
      description: 'Write a DataFrame to the binary Feather format.'
    },
    {
      title: 'to_gbq',
      value: 'function',
      description: 'Write a DataFrame to a Google BigQuery table.'
    },
    {
      title: 'to_hdf',
      value: 'function',
      description: 'Write the contained data to an HDF5 file using HDFStore.'
    },
    {
      title: 'to_html',
      value: 'function',
      description: 'Render a DataFrame as an HTML table.'
    },
    {
      title: 'to_json',
      value: 'function',
      description: 'Convert the object to a JSON string.'
    },
    {
      title: 'to_latex',
      value: 'function',
      description: 'Render the object to a LaTeX tabular, longtable, or nested table.'
    },
    {
      title: 'to_markdown',
      value: 'function',
      description: 'Print a DataFrame in a Markdown-friendly format.'
    },
    {
      title: 'to_numpy',
      value: 'function',
      description: 'Convert the DataFrame to a NumPy array.'
    },
    {
      title: 'to_orc',
      value: 'function',
      description: 'Write a DataFrame to the ORC format.'
    },
    {
      title: 'to_parquet',
      value: 'function',
      description: 'Write a DataFrame to the binary parquet format.'
    },
    {
      title: 'to_period',
      value: 'function',
      description: 'Convert a DataFrame from DatetimeIndex to PeriodIndex.'
    },
    {
      title: 'to_pickle',
      value: 'function',
      description: 'Pickle (serialize) the object to a file.'
    },
    {
      title: 'to_records',
      value: 'function',
      description: 'Convert a DataFrame to a NumPy record array.'
    },
    {
      title: 'to_sql',
      value: 'function',
      description: 'Write records stored in a DataFrame to a SQL database.'
    },
    {
      title: 'to_stata',
      value: 'function',
      description: 'Export a DataFrame object to Stata dta format.'
    },
    {
      title: 'to_string',
      value: 'function',
      description: 'Render a DataFrame to a console-friendly tabular output.'
    },
    {
      title: 'to_timestamp',
      value: 'function',
      description: 'Cast to DatetimeIndex of timestamps, at the beginning of the period.'
    },
    {
      title: 'to_xarray',
      value: 'function',
      description: 'Return an xarray object from the pandas object.'
    },
    {
      title: 'to_xml',
      value: 'function',
      description: 'Render a DataFrame to an XML document.'
    },
    {
      title: 'transform',
      value: 'function',
      description: 'Call `func` on self, producing a DataFrame with the same axis shape as self.'
    },
    {
      title: 'transpose',
      value: 'function',
      description: 'Transpose the index and columns.'
    },
    {
      title: 'truediv',
      value: 'function',
      description: 'Get Floating division of the dataframe and other, element-wise (binary operator `truediv`).'
    },
    {
      title: 'truncate',
      value: 'function',
      description: 'Truncate a Series or DataFrame before and after some index value.'
    },
    {
      title: 'tshift',
      value: 'function',
      description: 'Shift the time index, using the index\'s frequency if available.'
    },
    {
      title: 'tz_convert',
      value: 'function',
      description: 'Convert a tz-aware axis to the target time zone.'
    },
    {
      title: 'tz_localize',
      value: 'function',
      description: 'Localize a tz-naive index of a Series or DataFrame to the target time zone.'
    },
    {
      title: 'unstack',
      value: 'function',
      description: 'Pivot a level of the necessarily hierarchical index labels.'
    },
    {
      title: 'update',
      value: 'function',
      description: 'Modify in place using non-NA values from another DataFrame.'
    },
    {
      title: 'value_counts',
      value: 'function',
      description: 'Return a Series containing counts of unique rows in the DataFrame.'
    },
    {
      title: 'var',
      value: 'function',
      description: 'Return the unbiased variance over the requested axis.'
    },
    {
      title: 'where',
      value: 'function',
      description: 'Replace values where the condition is False.'
    },
    {
      title: 'xs',
      value: 'function',
      description: 'Return a cross-section from the Series or DataFrame.'
    },
    {
      title: 'plot',
      value: 'class',
      description: 'Make plots of Series or DataFrame.'
    },
    {
      title: 'sparse',
      value: 'class',
      description: 'DataFrame accessor for sparse data.'
    }
   
  ];

  export default parameterData