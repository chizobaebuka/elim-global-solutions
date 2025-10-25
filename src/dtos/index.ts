
export interface IPaginationParams {
    page?: number;
    limit?: number;
}

export interface IPaginatedResponse<T> {
    data: T[];
    pagination: {
        totalItems: number;
        totalPages: number;
        currentPage: number;
        pageSize: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };
}

export interface IEmployeeCreateDTO {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    role?: string;
}

export interface IEmployeeUpdateDTO {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    role?: string;
}

export interface IEmployeeQueryDTO {
    limit?: number;
    page?: number;
}