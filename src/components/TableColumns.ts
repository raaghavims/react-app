import FilterForm from './FilterForm';

export const Columns = [
    {
        Header: 'ID',
        accessor: 'id' as const,
        disableFilters: true,
    },
    {
        Header: 'Name',
        accessor: 'name' as const,
        disableFilters: true,
    },
    {
        Header: 'Brand',
        accessor: 'brand' as const,
        Filter: FilterForm,
    },
    {
        Header: 'Year',
        accessor: 'year' as const,
        Filter: FilterForm,
    },
    
    {
        Header: 'Price',
        accessor: 'price' as const,
        disableFilters: true,
    },
    {
        Header: 'KiloMeters Driven',
        accessor: 'kiloMetersDriven' as const,
        disableFilters: true,
    },
    {
        Header: 'ImageURL',
        accessor: 'imageURL' as const,
        disableFilters: true,
    },
]