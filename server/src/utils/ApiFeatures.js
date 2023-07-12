class ApiFeatures {
    constructor(base, query) {
        this.base = base;
        this.query = query;
    }

    search() {
        const searchWord = this.query.search
        ? {
            name: {
                $regex: this.query.search,
                $options: "i",
            },
        }
        : {};

        this.base = this.base.find({ ...searchWord });
        return this;
    }

    filter() {
        const copyQuery = { ...this.query };

        delete copyQuery["search"]
        delete copyQuery["limit"]
        delete copyQuery["page"]

        //convert query into a string => copyQuery
        let stringOfCopyQuery = JSON.stringify(copyQuery)

        stringOfCopyQuery = stringOfCopyQuery.replace(
            /\b(gt|gte|lt|lte)\b/g,
            (key) => `$${key}`
        )

        const jsonOfCopyQuery = JSON.parse(stringOfCopyQuery);

        this.base = this.base.find(jsonOfCopyQuery);
        return this;
    }

    pagination(resultPerPage) {
        let currentPage = 1;
        if(this.query.page) {
            currentPage = this.query.page;
        }

        const skipVal = resultPerPage * (currentPage - 1);

        this.base = this.base.limit(resultPerPage).skip(skipVal);
        return this;
    }
}

module.exports = ApiFeatures;