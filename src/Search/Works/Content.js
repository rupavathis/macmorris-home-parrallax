import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';
import { ExportToCsv } from 'export-to-csv'; //or use your library of choice here
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Button } from '@mui/material';
import {
    Link
} from "react-router-dom";
import '../search.scss'

//nested data is ok, see accessorKeys in ColumnDef below


const Content = ({ data }) => {
    //should be memoized or stable


    const columns =
        [
            {
                accessorKey: 'display_title',
                header: 'Title',
                Cell: ({ renderedCellValue, row }) => {
                    console.log({row})
                    return (<Link className='link' to={`/works/${row.original.id}`}>
                        <span>{renderedCellValue}</span>
                    </Link>)
                }
            },
            {
                accessorKey: 'author_id.name',
                header: 'Author Name',
            },

            {
                accessorKey: 'work_date',
                header: 'Date of Work',
            },
            {
                accessorFn: (row) => `${[...new Set(row.languages.map(a => a.name))].join(",")}`, //accessorFn used to join multiple data into a single cell
                id: 'language', //id is still required when using accessorFn instead of accessorKey
                header: 'Language',
            },

        ]


    const csvOptions = {
        fieldSeparator: ',',
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true,
        useBom: true,
        useKeysAsHeaders: false,
        headers: columns.map((c) => c.header),
    };

    const csvExporter = new ExportToCsv(csvOptions);

    const handleExportData = () => {
        csvExporter.generateCsv(data);
    };


    return <MaterialReactTable columns={columns} data={data}
        enableColumnActions={false}
        enableDensityToggle={false}
        initialState={{ density: 'compact' }}
        renderTopToolbarCustomActions={({ table }) => (
            <button onClick={handleExportData}>
                <FileDownloadIcon />
            </button>

        )}
    />;
};

export default Content;
