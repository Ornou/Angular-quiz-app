export class CategoryListComponent {
  categories: Category[] = [];
  filteredCategories: Category[] = [];
  searchTerm: string = '';

  constructor(private categoryService: CategoryService) {
    this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
      this.filteredCategories = data;
    });
  }

  filterCategories() {
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  resetFilter() {
    this.searchTerm = '';
    this.filteredCategories = this.categories;
  }
}