interface ErrorResponse {
	'message': string;
	'errors'?: ErrorErrors;
	'code'?: number;
	'parameters'?: ErrorParameters;
	'trace'?: string;
}
interface ErrorErrors {
	'items': ErrorErrorsItem[];
}
interface ErrorErrorsItem {
	'message'?: string;
	'parameters'?: ErrorParameters;
}
interface ErrorParameters {
	'items': ErrorParametersItem[];
}
interface ErrorParametersItem {
	'resources'?: string;
	'fieldName'?: string;
	'fieldValue'?: string;
}
interface StoreDataStoreSchema {
	'id': number;
	'code': string;
	'name': string;
	'website_id': number;
	'store_group_id': number;
	'extension_attributes'?: StoreDataStoreExtensionSchema;
}
interface StoreDataStoreExtensionSchema {}
interface StoreDataGroupSchema {
	'id': number;
	'website_id': number;
	'root_category_id': number;
	'default_store_id': number;
	'name': string;
	'code': string;
	'extension_attributes'?: StoreDataGroupExtensionSchema;
}
interface StoreDataGroupExtensionSchema {}
interface StoreDataWebsiteSchema {
	'id': number;
	'code': string;
	'name': string;
	'default_group_id': number;
	'extension_attributes'?: StoreDataWebsiteExtensionSchema;
}
interface StoreDataWebsiteExtensionSchema {}
interface StoreDataStoreConfigSchema {
	'id': number;
	'code': string;
	'website_id': number;
	'locale': string;
	'base_currency_code': string;
	'default_display_currency_code': string;
	'timezone': string;
	'weight_unit': string;
	'base_url': string;
	'base_link_url': string;
	'base_static_url': string;
	'base_media_url': string;
	'secure_base_url': string;
	'secure_base_link_url': string;
	'secure_base_static_url': string;
	'secure_base_media_url': string;
	'extension_attributes'?: StoreDataStoreConfigExtensionSchema;
}
interface StoreDataStoreConfigExtensionSchema {}
interface DirectoryDataCurrencyInformationSchema {
	'base_currency_code': string;
	'base_currency_symbol': string;
	'default_display_currency_code': string;
	'default_display_currency_symbol': string;
	'available_currency_codes': {
		'items': string[]
	};
	'exchange_rates': {
		'items': DirectoryDataExchangeRateSchema[]
	};
	'extension_attributes'?: DirectoryDataCurrencyInformationExtensionSchema;
}
interface DirectoryDataExchangeRateSchema {
	'currency_to': string;
	'rate': number;
	'extension_attributes'?: DirectoryDataExchangeRateExtensionSchema;
}
interface DirectoryDataExchangeRateExtensionSchema {}
interface DirectoryDataCurrencyInformationExtensionSchema {}
interface DirectoryDataCountryInformationSchema {
	'id': string;
	'two_letter_abbreviation': string;
	'three_letter_abbreviation': string;
	'full_name_locale': string;
	'full_name_english': string;
	'available_regions'?: {
		'items': DirectoryDataRegionInformationSchema[]
	};
	'extension_attributes'?: DirectoryDataCountryInformationExtensionSchema;
}
interface DirectoryDataRegionInformationSchema {
	'id': string;
	'code': string;
	'name': string;
	'extension_attributes'?: DirectoryDataRegionInformationExtensionSchema;
}
interface DirectoryDataRegionInformationExtensionSchema {}
interface DirectoryDataCountryInformationExtensionSchema {}
interface EavDataAttributeSetSearchResultsSchema {
	'items': {
		'items': EavDataAttributeSetSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface EavDataAttributeSetSchema {
	'attribute_set_id'?: number;
	'attribute_set_name': string;
	'sort_order': number;
	'entity_type_id'?: number;
	'extension_attributes'?: EavDataAttributeSetExtensionSchema;
}
interface EavDataAttributeSetExtensionSchema {}
interface FrameworkSearchCriteriaSchema {
	'filter_groups': {
		'items': FrameworkSearchFilterGroup[]
	};
	'sort_orders'?: {
		'items': FrameworkSortOrder[]
	};
	'page_size'?: number;
	'current_page'?: number;
}
interface FrameworkSearchFilterGroup {
	'filters'?: {
		'items': FrameworkFilter[]
	};
}
interface FrameworkFilter {
	'field': string;
	'value': string;
	'condition_type'?: string;
}
interface FrameworkSortOrder {
	'field': string;
	'direction': string;
}
interface CustomerDataGroupSchema {
	'id'?: number;
	'code': string;
	'tax_class_id': number;
	'tax_class_name'?: string;
	'extension_attributes'?: CustomerDataGroupExtensionSchema;
}
interface CustomerDataGroupExtensionSchema {}
interface CustomerDataGroupSearchResultsSchema {
	'items': {
		'items': CustomerDataGroupSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CustomerDataAttributeMetadataSchema {
	'frontend_input': string;
	'input_filter': string;
	'store_label': string;
	'validation_rules': {
		'items': CustomerDataValidationRuleSchema[]
	};
	'multiline_count': number;
	'visible': boolean;
	'required': boolean;
	'data_model': string;
	'options': {
		'items': CustomerDataOptionSchema[]
	};
	'frontend_class': string;
	'user_defined': boolean;
	'sort_order': number;
	'frontend_label': string;
	'note': string;
	'system': boolean;
	'backend_type': string;
	'is_used_in_grid'?: boolean;
	'is_visible_in_grid'?: boolean;
	'is_filterable_in_grid'?: boolean;
	'is_searchable_in_grid'?: boolean;
	'attribute_code': string;
}
interface CustomerDataValidationRuleSchema {
	'name': string;
	'value': string;
}
interface CustomerDataOptionSchema {
	'label': string;
	'value'?: string;
	'options'?: CustomerDataOptionSchema[];
}
export interface CustomerDataCustomerSchema {
	'id'?: number;
	'group_id'?: number;
	'default_billing'?: string;
	'default_shipping'?: string;
	'confirmation'?: string;
	'created_at'?: string;
	'updated_at'?: string;
	'created_in'?: string;
	'dob'?: string;
	'email': string;
	'firstname': string;
	'lastname': string;
	'middlename'?: string;
	'prefix'?: string;
	'suffix'?: string;
	'gender'?: number;
	'store_id'?: number;
	'taxvat'?: string;
	'website_id'?: number;
	'addresses'?: CustomerDataAddressSchema[];
	'disable_auto_group_change'?: number;
	'extension_attributes'?: CustomerDataCustomerExtensionSchema;
	'custom_attributes'?:  FrameworkAttributeSchema[];
}
export interface CustomerDataAddressSchema {
	'id'?: number;
	'customer_id'?: number;
	'region'?: CustomerDataRegionSchema;
	'region_id'?: number;
	'country_id'?: string;
	'street'?: string[];
	'company'?: string;
	'telephone'?: string;
	'fax'?: string;
	'postcode'?: string;
	'city'?: string;
	'firstname': string;
	'lastname': string;
	'middlename'?: string;
	'prefix'?: string;
	'suffix'?: string;
	'vat_id'?: string;
	'default_shipping'?: boolean;
	'default_billing'?: boolean;
	'extension_attributes'?: CustomerDataAddressExtensionSchema;
	'custom_attributes'?: FrameworkAttributeSchema[];
}
interface CustomerDataRegionSchema {
	'region_code': string;
	'region': string;
	'region_id': number;
	'extension_attributes'?: CustomerDataRegionExtensionSchema;
}
interface CustomerDataRegionExtensionSchema {}
interface CustomerDataAddressExtensionSchema {}
interface FrameworkAttributeSchema {
	'attribute_code': string;
	'value': string;
}
interface CustomerDataCustomerExtensionSchema {
	'company_attributes'?: CompanyDataCompanyCustomerSchema;
	'is_subscribed'?: boolean;
}
interface CompanyDataCompanyCustomerSchema {
	'customer_id'?: number;
	'company_id'?: number;
	'job_title'?: string;
	'status'?: number;
	'telephone'?: string;
	'extension_attributes'?: CompanyDataCompanyCustomerExtensionSchema;
}
interface CompanyDataCompanyCustomerExtensionSchema {}
interface CustomerDataCustomerSearchResultsSchema {
	'items': {
		'items': CustomerDataCustomerSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CustomerDataValidationResultsSchema {
	'valid': boolean;
	'messages': {
		'items': string[]
	};
}
interface CmsDataPageSchema {
	'id'?: number;
	'identifier': string;
	'title'?: string;
	'page_layout'?: string;
	'meta_title'?: string;
	'meta_keywords'?: string;
	'meta_description'?: string;
	'content_heading'?: string;
	'content'?: string;
	'creation_time'?: string;
	'update_time'?: string;
	'sort_order'?: string;
	'layout_update_xml'?: string;
	'custom_theme'?: string;
	'custom_root_template'?: string;
	'custom_layout_update_xml'?: string;
	'custom_theme_from'?: string;
	'custom_theme_to'?: string;
	'active'?: boolean;
}
interface CmsDataPageSearchResultsSchema {
	'items': {
		'items': CmsDataPageSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CmsDataBlockSchema {
	'id'?: number;
	'identifier': string;
	'title'?: string;
	'content'?: string;
	'creation_time'?: string;
	'update_time'?: string;
	'active'?: boolean;
}
interface CmsDataBlockSearchResultsSchema {
	'items': {
		'items': CmsDataBlockSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CatalogDataProductSchema {
	'id'?: number;
	'sku': string;
	'name'?: string;
	'attribute_set_id'?: number;
	'price'?: number;
	'status'?: number;
	'visibility'?: number;
	'type_id'?: string;
	'created_at'?: string;
	'updated_at'?: string;
	'weight'?: number;
	'extension_attributes'?: CatalogDataProductExtensionSchema;
	'product_links'?: {
		'items': CatalogDataProductLinkSchema[]
	};
	'options'?: {
		'items': CatalogDataProductCustomOptionSchema[]
	};
	'media_gallery_entries'?: {
		'items': CatalogDataProductAttributeMediaGalleryEntrySchema[]
	};
	'tier_prices'?: {
		'items': CatalogDataProductTierPriceSchema[]
	};
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CatalogDataProductExtensionSchema {
	'website_ids'?: {
		'items': number[]
	};
	'category_links'?: {
		'items': CatalogDataCategoryLinkSchema[]
	};
	'stock_item'?: CatalogInventoryDataStockItemSchema;
	'bundle_product_options'?: {
		'items': BundleDataOptionSchema[]
	};
	'configurable_product_options'?: {
		'items': ConfigurableProductDataOptionSchema[]
	};
	'configurable_product_links'?: {
		'items': number[]
	};
	'downloadable_product_links'?: {
		'items': DownloadableDataLinkSchema[]
	};
	'downloadable_product_samples'?: {
		'items': DownloadableDataSampleSchema[]
	};
	'giftcard_amounts'?: {
		'items': GiftCardDataGiftcardAmountSchema[]
	};
}
interface CatalogDataCategoryLinkSchema {
	'position'?: number;
	'category_id': string;
	'extension_attributes'?: CatalogDataCategoryLinkExtensionSchema;
}
interface CatalogDataCategoryLinkExtensionSchema {}
interface CatalogInventoryDataStockItemSchema {
	'item_id'?: number;
	'product_id'?: number;
	'stock_id'?: number;
	'qty': number;
	'is_in_stock': boolean;
	'is_qty_decimal': boolean;
	'show_default_notification_message': boolean;
	'use_config_min_qty': boolean;
	'min_qty': number;
	'use_config_min_sale_qty': number;
	'min_sale_qty': number;
	'use_config_max_sale_qty': boolean;
	'max_sale_qty': number;
	'use_config_backorders': boolean;
	'backorders': number;
	'use_config_notify_stock_qty': boolean;
	'notify_stock_qty': number;
	'use_config_qty_increments': boolean;
	'qty_increments': number;
	'use_config_enable_qty_inc': boolean;
	'enable_qty_increments': boolean;
	'use_config_manage_stock': boolean;
	'manage_stock': boolean;
	'low_stock_date': string;
	'is_decimal_divided': boolean;
	'stock_status_changed_auto': number;
	'extension_attributes'?: CatalogInventoryDataStockItemExtensionSchema;
}
interface CatalogInventoryDataStockItemExtensionSchema {}
interface BundleDataOptionSchema {
	'option_id'?: number;
	'title'?: string;
	'required'?: boolean;
	'type'?: string;
	'position'?: number;
	'sku'?: string;
	'product_links'?: {
		'items': BundleDataLinkSchema[]
	};
	'extension_attributes'?: BundleDataOptionExtensionSchema;
}
interface BundleDataLinkSchema {
	'id'?: string;
	'sku'?: string;
	'option_id'?: number;
	'qty'?: number;
	'position'?: number;
	'is_default': boolean;
	'price': number;
	'price_type': number;
	'can_change_quantity'?: number;
	'extension_attributes'?: BundleDataLinkExtensionSchema;
}
interface BundleDataLinkExtensionSchema {}
interface BundleDataOptionExtensionSchema {}
interface ConfigurableProductDataOptionSchema {
	'id'?: number;
	'attribute_id'?: string;
	'label'?: string;
	'position'?: number;
	'is_use_default'?: boolean;
	'values'?: {
		'items': ConfigurableProductDataOptionValueSchema[]
	};
	'extension_attributes'?: ConfigurableProductDataOptionExtensionSchema;
	'product_id'?: number;
}
interface ConfigurableProductDataOptionValueSchema {
	'value_index': number;
	'extension_attributes'?: ConfigurableProductDataOptionValueExtensionSchema;
}
interface ConfigurableProductDataOptionValueExtensionSchema {}
interface ConfigurableProductDataOptionExtensionSchema {}
interface DownloadableDataLinkSchema {
	'id'?: number;
	'title'?: string;
	'sort_order': number;
	'is_shareable': number;
	'price': number;
	'number_of_downloads'?: number;
	'link_type': string;
	'link_file'?: string;
	'link_file_content'?: DownloadableDataFileContentSchema;
	'link_url'?: string;
	'sample_type': string;
	'sample_file'?: string;
	'sample_file_content'?: DownloadableDataFileContentSchema;
	'sample_url'?: string;
	'extension_attributes'?: DownloadableDataLinkExtensionSchema;
}
interface DownloadableDataFileContentSchema {
	'file_data': string;
	'name': string;
	'extension_attributes'?: DownloadableDataFileContentExtensionSchema;
}
interface DownloadableDataFileContentExtensionSchema {}
interface DownloadableDataLinkExtensionSchema {}
interface DownloadableDataSampleSchema {
	'id'?: number;
	'title': string;
	'sort_order': number;
	'sample_type': string;
	'sample_file'?: string;
	'sample_file_content'?: DownloadableDataFileContentSchema;
	'sample_url'?: string;
	'extension_attributes'?: DownloadableDataSampleExtensionSchema;
}
interface DownloadableDataSampleExtensionSchema {}
interface GiftCardDataGiftcardAmountSchema {
	'attribute_id': number;
	'website_id': number;
	'value': number;
	'website_value': number;
	'extension_attributes'?: GiftCardDataGiftcardAmountExtensionSchema;
}
interface GiftCardDataGiftcardAmountExtensionSchema {}
interface CatalogDataProductLinkSchema {
	'sku': string;
	'link_type': string;
	'linked_product_sku': string;
	'linked_product_type': string;
	'position': number;
	'extension_attributes'?: CatalogDataProductLinkExtensionSchema;
}
interface CatalogDataProductLinkExtensionSchema {
	'qty'?: number;
}
interface CatalogDataProductCustomOptionSchema {
	'product_sku': string;
	'option_id'?: number;
	'title': string;
	'type': string;
	'sort_order': number;
	'is_require': boolean;
	'price'?: number;
	'price_type'?: string;
	'sku'?: string;
	'file_extension'?: string;
	'max_characters'?: number;
	'image_size_x'?: number;
	'image_size_y'?: number;
	'values'?: {
		'items': CatalogDataProductCustomOptionValuesSchema[]
	};
	'extension_attributes'?: CatalogDataProductCustomOptionExtensionSchema;
}
interface CatalogDataProductCustomOptionValuesSchema {
	'title': string;
	'sort_order': number;
	'price': number;
	'price_type': string;
	'sku'?: string;
	'option_type_id'?: number;
}
interface CatalogDataProductCustomOptionExtensionSchema {}
interface CatalogDataProductAttributeMediaGalleryEntrySchema {
	'id'?: number;
	'media_type': string;
	'label': string;
	'position': number;
	'disabled': boolean;
	'types': {
		'items': string[]
	};
	'file'?: string;
	'content'?: FrameworkDataImageContentSchema;
	'extension_attributes'?: CatalogDataProductAttributeMediaGalleryEntryExtensionSchema;
}
interface FrameworkDataImageContentSchema {
	'base64_encoded_data': string;
	'type': string;
	'name': string;
}
interface CatalogDataProductAttributeMediaGalleryEntryExtensionSchema {
	'video_content'?: FrameworkDataVideoContentSchema;
}
interface FrameworkDataVideoContentSchema {
	'media_type': string;
	'video_provider': string;
	'video_url': string;
	'video_title': string;
	'video_description': string;
	'video_metadata': string;
}
interface CatalogDataProductTierPriceSchema {
	'customer_group_id': number;
	'qty': number;
	'value': number;
	'extension_attributes'?: CatalogDataProductTierPriceExtensionSchema;
}
interface CatalogDataProductTierPriceExtensionSchema {
	'percentage_value'?: number;
	'website_id'?: number;
}
interface CatalogDataProductSearchResultsSchema {
	'items': {
		'items': CatalogDataProductSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CatalogDataProductAttributeTypeSchema {
	'value': string;
	'label': string;
	'extension_attributes'?: CatalogDataProductAttributeTypeExtensionSchema;
}
interface CatalogDataProductAttributeTypeExtensionSchema {}
interface CatalogDataProductAttributeSchema {
	'is_wysiwyg_enabled'?: boolean;
	'is_html_allowed_on_front'?: boolean;
	'used_for_sort_by'?: boolean;
	'is_filterable'?: boolean;
	'is_filterable_in_search'?: boolean;
	'is_used_in_grid'?: boolean;
	'is_visible_in_grid'?: boolean;
	'is_filterable_in_grid'?: boolean;
	'position'?: number;
	'apply_to'?: {
		'items': string[]
	};
	'is_searchable'?: string;
	'is_visible_in_advanced_search'?: string;
	'is_comparable'?: string;
	'is_used_for_promo_rules'?: string;
	'is_visible_on_front'?: string;
	'used_in_product_listing'?: string;
	'is_visible'?: boolean;
	'scope'?: string;
	'extension_attributes'?: CatalogDataEavAttributeExtensionSchema;
	'attribute_id'?: number;
	'attribute_code': string;
	'frontend_input': string;
	'entity_type_id': string;
	'is_required': boolean;
	'options'?: {
		'items': EavDataAttributeOptionSchema[]
	};
	'is_user_defined'?: boolean;
	'default_frontend_label'?: string;
	'frontend_labels': {
		'items': EavDataAttributeFrontendLabelSchema[]
	};
	'note'?: string;
	'backend_type'?: string;
	'backend_model'?: string;
	'source_model'?: string;
	'default_value'?: string;
	'is_unique'?: string;
	'frontend_class'?: string;
	'validation_rules'?: {
		'items': EavDataAttributeValidationRuleSchema[]
	};
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CatalogDataEavAttributeExtensionSchema {}
interface EavDataAttributeOptionSchema {
	'label': string;
	'value': string;
	'sort_order'?: number;
	'is_default'?: boolean;
	'store_labels'?: {
		'items': EavDataAttributeOptionLabelSchema[]
	};
}
interface EavDataAttributeOptionLabelSchema {
	'store_id'?: number;
	'label'?: string;
}
interface EavDataAttributeFrontendLabelSchema {
	'store_id'?: number;
	'label'?: string;
}
interface EavDataAttributeValidationRuleSchema {
	'key': string;
	'value': string;
}
interface CatalogDataProductAttributeSearchResultsSchema {
	'items': {
		'items': CatalogDataProductAttributeSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CatalogDataCategoryAttributeSchema {
	'is_wysiwyg_enabled'?: boolean;
	'is_html_allowed_on_front'?: boolean;
	'used_for_sort_by'?: boolean;
	'is_filterable'?: boolean;
	'is_filterable_in_search'?: boolean;
	'is_used_in_grid'?: boolean;
	'is_visible_in_grid'?: boolean;
	'is_filterable_in_grid'?: boolean;
	'position'?: number;
	'apply_to'?: {
		'items': string[]
	};
	'is_searchable'?: string;
	'is_visible_in_advanced_search'?: string;
	'is_comparable'?: string;
	'is_used_for_promo_rules'?: string;
	'is_visible_on_front'?: string;
	'used_in_product_listing'?: string;
	'is_visible'?: boolean;
	'scope'?: string;
	'extension_attributes'?: CatalogDataEavAttributeExtensionSchema;
	'attribute_id'?: number;
	'attribute_code': string;
	'frontend_input': string;
	'entity_type_id': string;
	'is_required': boolean;
	'options'?: {
		'items': EavDataAttributeOptionSchema[]
	};
	'is_user_defined'?: boolean;
	'default_frontend_label'?: string;
	'frontend_labels': {
		'items': EavDataAttributeFrontendLabelSchema[]
	};
	'note'?: string;
	'backend_type'?: string;
	'backend_model'?: string;
	'source_model'?: string;
	'default_value'?: string;
	'is_unique'?: string;
	'frontend_class'?: string;
	'validation_rules'?: {
		'items': EavDataAttributeValidationRuleSchema[]
	};
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CatalogDataCategoryAttributeSearchResultsSchema {
	'items': {
		'items': CatalogDataCategoryAttributeSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CatalogDataProductTypeSchema {
	'name': string;
	'label': string;
	'extension_attributes'?: CatalogDataProductTypeExtensionSchema;
}
interface CatalogDataProductTypeExtensionSchema {}
interface EavDataAttributeGroupSearchResultsSchema {
	'items': {
		'items': EavDataAttributeGroupSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface EavDataAttributeGroupSchema {
	'attribute_group_id'?: string;
	'attribute_group_name'?: string;
	'attribute_set_id'?: number;
	'extension_attributes'?: EavDataAttributeGroupExtensionSchema;
}
interface EavDataAttributeGroupExtensionSchema {
	'attribute_group_code'?: string;
	'sort_order'?: string;
}
interface CatalogDataTierPriceSchema {
	'price': number;
	'price_type': string;
	'website_id': number;
	'sku': string;
	'customer_group': string;
	'quantity': number;
	'extension_attributes'?: CatalogDataTierPriceExtensionSchema;
}
interface CatalogDataTierPriceExtensionSchema {}
interface CatalogDataPriceUpdateResultSchema {
	'message': string;
	'parameters': {
		'items': string[]
	};
	'extension_attributes'?: CatalogDataPriceUpdateResultExtensionSchema;
}
interface CatalogDataPriceUpdateResultExtensionSchema {}
interface CatalogDataBasePriceSchema {
	'price': number;
	'store_id': number;
	'sku': string;
	'extension_attributes'?: CatalogDataBasePriceExtensionSchema;
}
interface CatalogDataBasePriceExtensionSchema {}
interface CatalogDataCostSchema {
	'cost': number;
	'store_id': number;
	'sku': string;
	'extension_attributes'?: CatalogDataCostExtensionSchema;
}
interface CatalogDataCostExtensionSchema {}
interface CatalogDataSpecialPriceSchema {
	'price': number;
	'store_id': number;
	'sku': string;
	'price_from': string;
	'price_to': string;
	'extension_attributes'?: CatalogDataSpecialPriceExtensionSchema;
}
interface CatalogDataSpecialPriceExtensionSchema {}
interface CatalogDataCategorySchema {
	'id'?: number;
	'parent_id'?: number;
	'name': string;
	'is_active'?: boolean;
	'position'?: number;
	'level'?: number;
	'children'?: string;
	'created_at'?: string;
	'updated_at'?: string;
	'path'?: string;
	'available_sort_by'?: {
		'items': string[]
	};
	'include_in_menu'?: boolean;
	'extension_attributes'?: CatalogDataCategoryExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CatalogDataCategoryExtensionSchema {}
interface CatalogDataCategoryTreeSchema {
	'id'?: number;
	'parent_id': number;
	'name': string;
	'is_active': boolean;
	'position': number;
	'level': number;
	'product_count': number;
	'children_data': {
		'items': CatalogDataCategoryTreeSchema[]
	};
}
interface CatalogDataCategorySearchResultsSchema {
	'items': {
		'items': CatalogDataCategorySchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CatalogDataProductCustomOptionTypeSchema {
	'label': string;
	'code': string;
	'group': string;
	'extension_attributes'?: CatalogDataProductCustomOptionTypeExtensionSchema;
}
interface CatalogDataProductCustomOptionTypeExtensionSchema {}
interface CatalogDataProductLinkTypeSchema {
	'code': number;
	'name': string;
	'extension_attributes'?: CatalogDataProductLinkTypeExtensionSchema;
}
interface CatalogDataProductLinkTypeExtensionSchema {}
interface CatalogDataProductLinkAttributeSchema {
	'code': string;
	'type': string;
	'extension_attributes'?: CatalogDataProductLinkAttributeExtensionSchema;
}
interface CatalogDataProductLinkAttributeExtensionSchema {}
interface CatalogDataCategoryProductLinkSchema {
	'sku'?: string;
	'position'?: number;
	'category_id': string;
	'extension_attributes'?: CatalogDataCategoryProductLinkExtensionSchema;
}
interface CatalogDataCategoryProductLinkExtensionSchema {}
interface CatalogDataProductWebsiteLinkSchema {
	'sku': string;
	'website_id': number;
}
interface CatalogDataProductRenderSearchResultsSchema {
	'items': {
		'items': CatalogDataProductRenderSchema[]
	};
}
interface CatalogDataProductRenderSchema {
	'add_to_cart_button': CatalogDataProductRenderButtonSchema;
	'add_to_compare_button': CatalogDataProductRenderButtonSchema;
	'price_info': CatalogDataProductRenderPriceInfoSchema;
	'images': {
		'items': CatalogDataProductRenderImageSchema[]
	};
	'url': string;
	'id': number;
	'name': string;
	'type': string;
	'is_salable': string;
	'store_id': number;
	'currency_code': string;
	'extension_attributes': CatalogDataProductRenderExtensionSchema;
}
interface CatalogDataProductRenderButtonSchema {
	'post_data': string;
	'url': string;
	'required_options': boolean;
	'extension_attributes'?: CatalogDataProductRenderButtonExtensionSchema;
}
interface CatalogDataProductRenderButtonExtensionSchema {}
interface CatalogDataProductRenderPriceInfoSchema {
	'final_price': number;
	'max_price': number;
	'max_regular_price': number;
	'minimal_regular_price': number;
	'special_price': number;
	'minimal_price': number;
	'regular_price': number;
	'formatted_prices': CatalogDataProductRenderFormattedPriceInfoSchema;
	'extension_attributes'?: CatalogDataProductRenderPriceInfoExtensionSchema;
}
interface CatalogDataProductRenderFormattedPriceInfoSchema {
	'final_price': string;
	'max_price': string;
	'minimal_price': string;
	'max_regular_price': string;
	'minimal_regular_price': string;
	'special_price': string;
	'regular_price': string;
	'extension_attributes'?: CatalogDataProductRenderFormattedPriceInfoExtensionSchema;
}
interface CatalogDataProductRenderFormattedPriceInfoExtensionSchema {}
interface CatalogDataProductRenderPriceInfoExtensionSchema {
	'msrp'?: MsrpDataProductRenderMsrpPriceInfoSchema;
	'tax_adjustments'?: CatalogDataProductRenderPriceInfoSchema;
	'weee_attributes'?: {
		'items': WeeeDataProductRenderWeeeAdjustmentAttributeSchema[]
	};
	'weee_adjustment'?: string;
}
interface MsrpDataProductRenderMsrpPriceInfoSchema {
	'msrp_price': string;
	'is_applicable': string;
	'is_shown_price_on_gesture': string;
	'msrp_message': string;
	'explanation_message': string;
	'extension_attributes'?: MsrpDataProductRenderMsrpPriceInfoExtensionSchema;
}
interface MsrpDataProductRenderMsrpPriceInfoExtensionSchema {}
interface WeeeDataProductRenderWeeeAdjustmentAttributeSchema {
	'amount': string;
	'tax_amount': string;
	'tax_amount_incl_tax': string;
	'amount_excl_tax': string;
	'attribute_code': string;
	'extension_attributes': WeeeDataProductRenderWeeeAdjustmentAttributeExtensionSchema;
}
interface WeeeDataProductRenderWeeeAdjustmentAttributeExtensionSchema {}
interface CatalogDataProductRenderImageSchema {
	'url': string;
	'code': string;
	'height': number;
	'width': number;
	'label': string;
	'resized_width': number;
	'resized_height': number;
	'extension_attributes'?: CatalogDataProductRenderImageExtensionSchema;
}
interface CatalogDataProductRenderImageExtensionSchema {}
interface CatalogDataProductRenderExtensionSchema {
	'wishlist_button'?: CatalogDataProductRenderButtonSchema;
	'review_html'?: string;
}
interface CatalogInventoryDataStockStatusCollectionSchema {
	'items': {
		'items': CatalogInventoryDataStockStatusSchema[]
	};
	'search_criteria': CatalogInventoryStockStatusCriteriaSchema;
	'total_count': number;
}
interface CatalogInventoryDataStockStatusSchema {
	'product_id': number;
	'stock_id': number;
	'qty': number;
	'stock_status': number;
	'stock_item': CatalogInventoryDataStockItemSchema;
	'extension_attributes'?: CatalogInventoryDataStockStatusExtensionSchema;
}
interface CatalogInventoryDataStockStatusExtensionSchema {}
interface CatalogInventoryStockStatusCriteriaSchema {
	'mapper_interface_name': string;
	'criteria_list': {
		'items': FrameworkCriteriaSchema[]
	};
	'filters': {
		'items': string[]
	};
	'orders': {
		'items': string[]
	};
	'limit': {
		'items': string[]
	};
}
interface FrameworkCriteriaSchema {
	'mapper_interface_name': string;
	'criteria_list': {
		'items': FrameworkCriteriaSchema[]
	};
	'filters': {
		'items': string[]
	};
	'orders': {
		'items': string[]
	};
	'limit': {
		'items': string[]
	};
}
interface BundleDataOptionTypeSchema {
	'label': string;
	'code': string;
	'extension_attributes'?: BundleDataOptionTypeExtensionSchema;
}
interface BundleDataOptionTypeExtensionSchema {}
export interface QuoteDataCartSchema {
	'id': number;
	'created_at'?: string;
	'updated_at'?: string;
	'converted_at'?: string;
	'is_active'?: boolean;
	'is_virtual'?: boolean;
	'items'?: QuoteDataCartItemSchema[];
	'items_count'?: number;
	'items_qty'?: number;
	'customer': CustomerDataCustomerSchema;
	'billing_address'?: QuoteDataAddressSchema;
	'reserved_order_id'?: number;
	'orig_order_id'?: number;
	'currency'?: QuoteDataCurrencySchema;
	'customer_is_guest'?: boolean;
	'customer_note'?: string;
	'customer_note_notify'?: boolean;
	'customer_tax_class_id'?: number;
	'store_id': number;
	'extension_attributes'?: QuoteDataCartExtensionSchema;
}
export interface QuoteDataCartItemSchema {
	'item_id'?: number;
	'sku'?: string;
	'qty': number;
	'name'?: string;
	'price'?: number;
	'product_type'?: string;
	'quote_id': string;
	'product_option'?: QuoteDataProductOptionSchema;
	'extension_attributes'?: QuoteDataCartItemExtensionSchema;
}
interface QuoteDataProductOptionSchema {
	'extension_attributes'?: QuoteDataProductOptionExtensionSchema;
}
interface QuoteDataProductOptionExtensionSchema {
	'custom_options'?: {
		'items': CatalogDataCustomOptionSchema[]
	};
	'bundle_options'?: {
		'items': BundleDataBundleOptionSchema[]
	};
	'configurable_item_options'?: {
		'items': ConfigurableProductDataConfigurableItemOptionValueSchema[]
	};
	'downloadable_option'?: DownloadableDataDownloadableOptionSchema;
	'giftcard_item_option'?: GiftCardDataGiftCardOptionSchema;
}
interface CatalogDataCustomOptionSchema {
	'option_id': string;
	'option_value': string;
	'extension_attributes'?: CatalogDataCustomOptionExtensionSchema;
}
interface CatalogDataCustomOptionExtensionSchema {
	'file_info'?: FrameworkDataImageContentSchema;
}
interface BundleDataBundleOptionSchema {
	'option_id': number;
	'option_qty': number;
	'option_selections': {
		'items': number[]
	};
	'extension_attributes'?: BundleDataBundleOptionExtensionSchema;
}
interface BundleDataBundleOptionExtensionSchema {}
interface ConfigurableProductDataConfigurableItemOptionValueSchema {
	'option_id': string;
	'option_value'?: number;
	'extension_attributes'?: ConfigurableProductDataConfigurableItemOptionValueExtensionSchema;
}
interface ConfigurableProductDataConfigurableItemOptionValueExtensionSchema {}
interface DownloadableDataDownloadableOptionSchema {
	'downloadable_links': {
		'items': number[]
	};
}
interface GiftCardDataGiftCardOptionSchema {
	'giftcard_amount': string;
	'custom_giftcard_amount'?: number;
	'giftcard_sender_name': string;
	'giftcard_recipient_name': string;
	'giftcard_sender_email': string;
	'giftcard_recipient_email': string;
	'giftcard_message'?: string;
	'extension_attributes'?: GiftCardDataGiftCardOptionExtensionSchema;
}
interface GiftCardDataGiftCardOptionExtensionSchema {}
interface QuoteDataCartItemExtensionSchema {
	'negotiable_quote_item'?: NegotiableQuoteDataNegotiableQuoteItemSchema;
}
interface NegotiableQuoteDataNegotiableQuoteItemSchema {
	'item_id': number;
	'original_price': number;
	'original_tax_amount': number;
	'original_discount_amount': number;
	'extension_attributes'?: NegotiableQuoteDataNegotiableQuoteItemExtensionSchema;
}
interface NegotiableQuoteDataNegotiableQuoteItemExtensionSchema {}
export interface QuoteDataAddressSchema {
	'id'?: number;
	'region': string;
	'region_id': number;
	'region_code': string;
	'country_id': string;
	'street': string[];
	'company'?: string;
	'telephone': string;
	'fax'?: string;
	'postcode': string;
	'city': string;
	'firstname': string;
	'lastname': string;
	'middlename'?: string;
	'prefix'?: string;
	'suffix'?: string;
	'vat_id'?: string;
	'customer_id'?: number;
	'email': string;
	'same_as_billing'?: number;
	'customer_address_id'?: number;
	'save_in_address_book'?: number;
	'extension_attributes'?: QuoteDataAddressExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface QuoteDataAddressExtensionSchema {
	'gift_registry_id'?: number;
}
interface QuoteDataCurrencySchema {
	'global_currency_code'?: string;
	'base_currency_code'?: string;
	'store_currency_code'?: string;
	'quote_currency_code'?: string;
	'store_to_base_rate'?: number;
	'store_to_quote_rate'?: number;
	'base_to_global_rate'?: number;
	'base_to_quote_rate'?: number;
	'extension_attributes'?: QuoteDataCurrencyExtensionSchema;
}
interface QuoteDataCurrencyExtensionSchema {}
interface QuoteDataCartExtensionSchema {
	'shipping_assignments'?: {
		'items': QuoteDataShippingAssignmentSchema[]
	};
	'negotiable_quote'?: NegotiableQuoteDataNegotiableQuoteSchema;
}
interface QuoteDataShippingAssignmentSchema {
	'shipping': QuoteDataShippingSchema;
	'items': {
		'items': QuoteDataCartItemSchema[]
	};
	'extension_attributes'?: QuoteDataShippingAssignmentExtensionSchema;
}
interface QuoteDataShippingSchema {
	'address': QuoteDataAddressSchema;
	'method': string;
	'extension_attributes'?: QuoteDataShippingExtensionSchema;
}
interface QuoteDataShippingExtensionSchema {}
interface QuoteDataShippingAssignmentExtensionSchema {}
interface NegotiableQuoteDataNegotiableQuoteSchema {
	'quote_id': number;
	'is_regular_quote': boolean;
	'status': string;
	'negotiated_price_type': number;
	'negotiated_price_value': number;
	'shipping_price': number;
	'quote_name': string;
	'expiration_period': string;
	'email_notification_status': number;
	'has_unconfirmed_changes': boolean;
	'is_shipping_tax_changed': boolean;
	'is_customer_price_changed': boolean;
	'notifications': number;
	'applied_rule_ids': string;
	'is_address_draft': boolean;
	'deleted_sku': string;
	'creator_id': number;
	'creator_type': number;
	'original_total_price'?: number;
	'base_original_total_price'?: number;
	'negotiated_total_price'?: number;
	'base_negotiated_total_price'?: number;
	'extension_attributes'?: NegotiableQuoteDataNegotiableQuoteExtensionSchema;
}
interface NegotiableQuoteDataNegotiableQuoteExtensionSchema {}
interface QuoteDataCartSearchResultsSchema {
	'items': {
		'items': QuoteDataCartSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface QuoteDataPaymentSchema {
	'po_number'?: string;
	'method': string;
	'additional_data'?: {
		'items': string[]
	};
	'extension_attributes'?: QuoteDataPaymentExtensionSchema;
}
interface QuoteDataPaymentExtensionSchema {
	'agreement_ids'?: {
		'items': string[]
	};
}
export interface QuoteDataShippingMethodSchema {
	'carrier_code': string;
	'method_code': string;
	'carrier_title'?: string;
	'method_title'?: string;
	'amount': number;
	'base_amount': number;
	'available': boolean;
	'extension_attributes'?: QuoteDataShippingMethodExtensionSchema;
	'error_message': string;
	'price_excl_tax': number;
	'price_incl_tax': number;
}
interface QuoteDataShippingMethodExtensionSchema {}
export interface QuoteDataPaymentMethodSchema {
	'code': string;
	'title': string;
}
export interface QuoteDataTotalsSchema {
	'grand_total'?: number;
	'base_grand_total'?: number;
	'subtotal'?: number;
	'base_subtotal'?: number;
	'discount_amount'?: number;
	'base_discount_amount'?: number;
	'subtotal_with_discount'?: number;
	'base_subtotal_with_discount'?: number;
	'shipping_amount'?: number;
	'base_shipping_amount'?: number;
	'shipping_discount_amount'?: number;
	'base_shipping_discount_amount'?: number;
	'tax_amount'?: number;
	'base_tax_amount'?: number;
	'weee_tax_applied_amount'?: number;
	'shipping_tax_amount'?: number;
	'base_shipping_tax_amount'?: number;
	'subtotal_incl_tax'?: number;
	'base_subtotal_incl_tax'?: number;
	'shipping_incl_tax'?: number;
	'base_shipping_incl_tax'?: number;
	'base_currency_code'?: string;
	'quote_currency_code'?: string;
	'coupon_code'?: string;
	'items_qty'?: number;
	'items'?: QuoteDataTotalsItemSchema[];
	'total_segments': QuoteDataTotalSegmentSchema[];
	'extension_attributes'?: QuoteDataTotalsExtensionSchema;
}
interface QuoteDataTotalsItemSchema {
	'item_id': number;
	'price': number;
	'base_price': number;
	'qty': number;
	'row_total': number;
	'base_row_total': number;
	'row_total_with_discount'?: number;
	'tax_amount'?: number;
	'base_tax_amount'?: number;
	'tax_percent'?: number;
	'discount_amount'?: number;
	'base_discount_amount'?: number;
	'discount_percent'?: number;
	'price_incl_tax'?: number;
	'base_price_incl_tax'?: number;
	'row_total_incl_tax'?: number;
	'base_row_total_incl_tax'?: number;
	'options': string;
	'weee_tax_applied_amount': number;
	'weee_tax_applied': string;
	'extension_attributes'?: QuoteDataTotalsItemExtensionSchema;
	'name'?: string;
}
interface QuoteDataTotalsItemExtensionSchema {
	'negotiable_quote_item_totals'?: NegotiableQuoteDataNegotiableQuoteItemTotalsSchema;
}
interface NegotiableQuoteDataNegotiableQuoteItemTotalsSchema {
	'cost': number;
	'catalog_price': number;
	'base_catalog_price': number;
	'catalog_price_incl_tax': number;
	'base_catalog_price_incl_tax': number;
	'cart_price': number;
	'base_cart_price': number;
	'cart_tax': number;
	'base_cart_tax': number;
	'cart_price_incl_tax': number;
	'base_cart_price_incl_tax': number;
	'extension_attributes'?: NegotiableQuoteDataNegotiableQuoteItemTotalsExtensionSchema;
}
interface NegotiableQuoteDataNegotiableQuoteItemTotalsExtensionSchema {}
export interface QuoteDataTotalSegmentSchema {
	'code': string;
	'title'?: string;
	'value': number;
	'area'?: string;
	'extension_attributes'?: QuoteDataTotalSegmentExtensionSchema;
}
interface QuoteDataTotalSegmentExtensionSchema {
	'tax_grandtotal_details'?: {
		'items': TaxDataGrandTotalDetailsSchema[]
	};
	'gift_cards'?: string;
	'gw_order_id'?: string;
	'gw_item_ids'?: {
		'items': string[]
	};
	'gw_allow_gift_receipt'?: string;
	'gw_add_card'?: string;
	'gw_price'?: string;
	'gw_base_price'?: string;
	'gw_items_price'?: string;
	'gw_items_base_price'?: string;
	'gw_card_price'?: string;
	'gw_card_base_price'?: string;
	'gw_base_tax_amount'?: string;
	'gw_tax_amount'?: string;
	'gw_items_base_tax_amount'?: string;
	'gw_items_tax_amount'?: string;
	'gw_card_base_tax_amount'?: string;
	'gw_card_tax_amount'?: string;
	'gw_price_incl_tax'?: string;
	'gw_base_price_incl_tax'?: string;
	'gw_card_price_incl_tax'?: string;
	'gw_card_base_price_incl_tax'?: string;
	'gw_items_price_incl_tax'?: string;
	'gw_items_base_price_incl_tax'?: string;
}
interface TaxDataGrandTotalDetailsSchema {
	'amount': number;
	'rates': {
		'items': TaxDataGrandTotalRatesSchema[]
	};
	'group_id': number;
}
interface TaxDataGrandTotalRatesSchema {
	'percent': string;
	'title': string;
}
interface QuoteDataTotalsExtensionSchema {
	'coupon_label'?: string;
	'base_customer_balance_amount'?: number;
	'customer_balance_amount'?: number;
	'negotiable_quote_totals'?: NegotiableQuoteDataNegotiableQuoteTotalsSchema;
	'reward_points_balance'?: number;
	'reward_currency_amount'?: number;
	'base_reward_currency_amount'?: number;
}
interface NegotiableQuoteDataNegotiableQuoteTotalsSchema {
	'items_count': number;
	'quote_status': string;
	'created_at': string;
	'updated_at': string;
	'customer_group': number;
	'base_to_quote_rate': number;
	'cost_total': number;
	'base_cost_total': number;
	'original_total': number;
	'base_original_total': number;
	'original_tax': number;
	'base_original_tax': number;
	'original_price_incl_tax': number;
	'base_original_price_incl_tax': number;
	'negotiated_price_type': number;
	'negotiated_price_value': number;
}
interface QuoteDataTotalsAdditionalDataSchema {
	'extension_attributes'?: QuoteDataTotalsAdditionalDataExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface QuoteDataTotalsAdditionalDataExtensionSchema {
	'gift_messages'?: {
		'items': GiftMessageDataMessageSchema[]
	};
}
interface GiftMessageDataMessageSchema {
	'gift_message_id'?: number;
	'customer_id'?: number;
	'sender': string;
	'recipient': string;
	'message': string;
	'extension_attributes'?: GiftMessageDataMessageExtensionSchema;
}
interface GiftMessageDataMessageExtensionSchema {
	'entity_id'?: string;
	'entity_type'?: string;
	'wrapping_id'?: number;
	'wrapping_allow_gift_receipt'?: boolean;
	'wrapping_add_printed_card'?: boolean;
}
interface RequisitionListDataRequisitionListSchema {
	'id': number;
	'customer_id': number;
	'name': string;
	'updated_at': string;
	'description': string;
	'items': {
		'items': RequisitionListDataRequisitionListItemSchema[]
	};
	'extension_attributes'?: RequisitionListDataRequisitionListExtensionSchema;
}
interface RequisitionListDataRequisitionListItemSchema {
	'id': number;
	'sku': number;
	'requisition_list_id': number;
	'qty': number;
	'options': {
		'items': string[]
	};
	'store_id': number;
	'added_at': string;
	'extension_attributes'?: RequisitionListDataRequisitionListItemExtensionSchema;
}
interface RequisitionListDataRequisitionListItemExtensionSchema {}
interface RequisitionListDataRequisitionListExtensionSchema {}
interface FrameworkSearchSearchResultSchema {
	'items': {
		'items': FrameworkSearchDocumentSchema[]
	};
	'aggregations': FrameworkSearchAggregationSchema;
	'search_criteria': FrameworkSearchSearchCriteriaSchema;
	'total_count': number;
}
interface FrameworkSearchDocumentSchema {
	'id': number;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface FrameworkSearchAggregationSchema {
	'buckets': {
		'items': FrameworkSearchBucketSchema[]
	};
	'bucket_names': {
		'items': string[]
	};
}
interface FrameworkSearchBucketSchema {
	'name': string;
	'values': {
		'items': FrameworkSearchAggregationValueSchema[]
	};
}
interface FrameworkSearchAggregationValueSchema {
	'value': string;
	'metrics': {
		'items': string[]
	};
}
interface FrameworkSearchSearchCriteriaSchema {
	'request_name': string;
	'filter_groups': {
		'items': FrameworkSearchFilterGroup[]
	};
	'sort_orders'?: {
		'items': FrameworkSortOrder[]
	};
	'page_size'?: number;
	'current_page'?: number;
}
export interface SalesDataOrderSchema {
	'adjustment_negative'?: number;
	'adjustment_positive'?: number;
	'applied_rule_ids'?: string;
	'base_adjustment_negative'?: number;
	'base_adjustment_positive'?: number;
	'base_currency_code'?: string;
	'base_discount_amount'?: number;
	'base_discount_canceled'?: number;
	'base_discount_invoiced'?: number;
	'base_discount_refunded'?: number;
	'base_grand_total': number;
	'base_discount_tax_compensation_amount'?: number;
	'base_discount_tax_compensation_invoiced'?: number;
	'base_discount_tax_compensation_refunded'?: number;
	'base_shipping_amount'?: number;
	'base_shipping_canceled'?: number;
	'base_shipping_discount_amount'?: number;
	'base_shipping_discount_tax_compensation_amnt'?: number;
	'base_shipping_incl_tax'?: number;
	'base_shipping_invoiced'?: number;
	'base_shipping_refunded'?: number;
	'base_shipping_tax_amount'?: number;
	'base_shipping_tax_refunded'?: number;
	'base_subtotal'?: number;
	'base_subtotal_canceled'?: number;
	'base_subtotal_incl_tax'?: number;
	'base_subtotal_invoiced'?: number;
	'base_subtotal_refunded'?: number;
	'base_tax_amount'?: number;
	'base_tax_canceled'?: number;
	'base_tax_invoiced'?: number;
	'base_tax_refunded'?: number;
	'base_total_canceled'?: number;
	'base_total_due'?: number;
	'base_total_invoiced'?: number;
	'base_total_invoiced_cost'?: number;
	'base_total_offline_refunded'?: number;
	'base_total_online_refunded'?: number;
	'base_total_paid'?: number;
	'base_total_qty_ordered'?: number;
	'base_total_refunded'?: number;
	'base_to_global_rate'?: number;
	'base_to_order_rate'?: number;
	'billing_address_id'?: number;
	'can_ship_partially'?: number;
	'can_ship_partially_item'?: number;
	'coupon_code'?: string;
	'created_at'?: string;
	'customer_dob'?: string;
	'customer_email': string;
	'customer_firstname'?: string;
	'customer_gender'?: number;
	'customer_group_id'?: number;
	'customer_id'?: number;
	'customer_is_guest'?: number;
	'customer_lastname'?: string;
	'customer_middlename'?: string;
	'customer_note'?: string;
	'customer_note_notify'?: number;
	'customer_prefix'?: string;
	'customer_suffix'?: string;
	'customer_taxvat'?: string;
	'discount_amount'?: number;
	'discount_canceled'?: number;
	'discount_description'?: string;
	'discount_invoiced'?: number;
	'discount_refunded'?: number;
	'edit_increment'?: number;
	'email_sent'?: number;
	'entity_id'?: number;
	'ext_customer_id'?: string;
	'ext_order_id'?: string;
	'forced_shipment_with_invoice'?: number;
	'global_currency_code'?: string;
	'grand_total': number;
	'discount_tax_compensation_amount'?: number;
	'discount_tax_compensation_invoiced'?: number;
	'discount_tax_compensation_refunded'?: number;
	'hold_before_state'?: string;
	'hold_before_status'?: string;
	'increment_id'?: string;
	'is_virtual'?: number;
	'order_currency_code'?: string;
	'original_increment_id'?: string;
	'payment_authorization_amount'?: number;
	'payment_auth_expiration'?: number;
	'protect_code'?: string;
	'quote_address_id'?: number;
	'quote_id'?: number;
	'relation_child_id'?: string;
	'relation_child_real_id'?: string;
	'relation_parent_id'?: string;
	'relation_parent_real_id'?: string;
	'remote_ip'?: string;
	'shipping_amount'?: number;
	'shipping_canceled'?: number;
	'shipping_description'?: string;
	'shipping_discount_amount'?: number;
	'shipping_discount_tax_compensation_amount'?: number;
	'shipping_incl_tax'?: number;
	'shipping_invoiced'?: number;
	'shipping_refunded'?: number;
	'shipping_tax_amount'?: number;
	'shipping_tax_refunded'?: number;
	'state'?: string;
	'status'?: string;
	'store_currency_code'?: string;
	'store_id'?: number;
	'store_name'?: string;
	'store_to_base_rate'?: number;
	'store_to_order_rate'?: number;
	'subtotal'?: number;
	'subtotal_canceled'?: number;
	'subtotal_incl_tax'?: number;
	'subtotal_invoiced'?: number;
	'subtotal_refunded'?: number;
	'tax_amount'?: number;
	'tax_canceled'?: number;
	'tax_invoiced'?: number;
	'tax_refunded'?: number;
	'total_canceled'?: number;
	'total_due'?: number;
	'total_invoiced'?: number;
	'total_item_count'?: number;
	'total_offline_refunded'?: number;
	'total_online_refunded'?: number;
	'total_paid'?: number;
	'total_qty_ordered'?: number;
	'total_refunded'?: number;
	'updated_at'?: string;
	'weight'?: number;
	'x_forwarded_for'?: string;
	'items': SalesDataOrderItemSchema[];
	'billing_address'?: SalesDataOrderAddressSchema;
	'payment'?: SalesDataOrderPaymentSchema;
	'status_histories'?: {
		'items': SalesDataOrderStatusHistorySchema[]
	};
	'extension_attributes'?: SalesDataOrderExtensionSchema;
}
export interface SalesDataOrderItemSchema {
	'additional_data'?: string;
	'amount_refunded'?: number;
	'applied_rule_ids'?: string;
	'base_amount_refunded'?: number;
	'base_cost'?: number;
	'base_discount_amount'?: number;
	'base_discount_invoiced'?: number;
	'base_discount_refunded'?: number;
	'base_discount_tax_compensation_amount'?: number;
	'base_discount_tax_compensation_invoiced'?: number;
	'base_discount_tax_compensation_refunded'?: number;
	'base_original_price'?: number;
	'base_price'?: number;
	'base_price_incl_tax'?: number;
	'base_row_invoiced'?: number;
	'base_row_total'?: number;
	'base_row_total_incl_tax'?: number;
	'base_tax_amount'?: number;
	'base_tax_before_discount'?: number;
	'base_tax_invoiced'?: number;
	'base_tax_refunded'?: number;
	'base_weee_tax_applied_amount'?: number;
	'base_weee_tax_applied_row_amnt'?: number;
	'base_weee_tax_disposition'?: number;
	'base_weee_tax_row_disposition'?: number;
	'created_at'?: string;
	'description'?: string;
	'discount_amount'?: number;
	'discount_invoiced'?: number;
	'discount_percent'?: number;
	'discount_refunded'?: number;
	'event_id'?: number;
	'ext_order_item_id'?: string;
	'free_shipping'?: number;
	'gw_base_price'?: number;
	'gw_base_price_invoiced'?: number;
	'gw_base_price_refunded'?: number;
	'gw_base_tax_amount'?: number;
	'gw_base_tax_amount_invoiced'?: number;
	'gw_base_tax_amount_refunded'?: number;
	'gw_id'?: number;
	'gw_price'?: number;
	'gw_price_invoiced'?: number;
	'gw_price_refunded'?: number;
	'gw_tax_amount'?: number;
	'gw_tax_amount_invoiced'?: number;
	'gw_tax_amount_refunded'?: number;
	'discount_tax_compensation_amount'?: number;
	'discount_tax_compensation_canceled'?: number;
	'discount_tax_compensation_invoiced'?: number;
	'discount_tax_compensation_refunded'?: number;
	'is_qty_decimal'?: number;
	'is_virtual'?: number;
	'item_id'?: number;
	'locked_do_invoice'?: number;
	'locked_do_ship'?: number;
	'name'?: string;
	'no_discount'?: number;
	'order_id'?: number;
	'original_price'?: number;
	'parent_item_id'?: number;
	'price'?: number;
	'price_incl_tax'?: number;
	'product_id'?: number;
	'product_type'?: string;
	'qty_backordered'?: number;
	'qty_canceled'?: number;
	'qty_invoiced'?: number;
	'qty_ordered'?: number;
	'qty_refunded'?: number;
	'qty_returned'?: number;
	'qty_shipped'?: number;
	'quote_item_id'?: number;
	'row_invoiced'?: number;
	'row_total'?: number;
	'row_total_incl_tax'?: number;
	'row_weight'?: number;
	'sku': string;
	'store_id'?: number;
	'tax_amount'?: number;
	'tax_before_discount'?: number;
	'tax_canceled'?: number;
	'tax_invoiced'?: number;
	'tax_percent'?: number;
	'tax_refunded'?: number;
	'updated_at'?: string;
	'weee_tax_applied'?: string;
	'weee_tax_applied_amount'?: number;
	'weee_tax_applied_row_amount'?: number;
	'weee_tax_disposition'?: number;
	'weee_tax_row_disposition'?: number;
	'weight'?: number;
	'parent_item'?: SalesDataOrderItemSchema;
	'product_option'?: CatalogDataProductOptionSchema;
	'extension_attributes'?: SalesDataOrderItemExtensionSchema;
}
interface CatalogDataProductOptionSchema {
	'extension_attributes'?: CatalogDataProductOptionExtensionSchema;
}
interface CatalogDataProductOptionExtensionSchema {
	'custom_options'?: {
		'items': CatalogDataCustomOptionSchema[]
	};
	'bundle_options'?: {
		'items': BundleDataBundleOptionSchema[]
	};
	'configurable_item_options'?: {
		'items': ConfigurableProductDataConfigurableItemOptionValueSchema[]
	};
	'downloadable_option'?: DownloadableDataDownloadableOptionSchema;
	'giftcard_item_option'?: GiftCardDataGiftCardOptionSchema;
}
interface SalesDataOrderItemExtensionSchema {
	'gift_message'?: GiftMessageDataMessageSchema;
	'gw_id'?: string;
	'gw_base_price'?: string;
	'gw_price'?: string;
	'gw_base_tax_amount'?: string;
	'gw_tax_amount'?: string;
	'gw_base_price_invoiced'?: string;
	'gw_price_invoiced'?: string;
	'gw_base_tax_amount_invoiced'?: string;
	'gw_tax_amount_invoiced'?: string;
	'gw_base_price_refunded'?: string;
	'gw_price_refunded'?: string;
	'gw_base_tax_amount_refunded'?: string;
	'gw_tax_amount_refunded'?: string;
}
interface SalesDataOrderAddressSchema {
	'address_type': string;
	'city': string;
	'company'?: string;
	'country_id': string;
	'customer_address_id'?: number;
	'customer_id'?: number;
	'email'?: string;
	'entity_id'?: number;
	'fax'?: string;
	'firstname': string;
	'lastname': string;
	'middlename'?: string;
	'parent_id'?: number;
	'postcode': string;
	'prefix'?: string;
	'region'?: string;
	'region_code'?: string;
	'region_id'?: number;
	'street'?: {
		'items': string[]
	};
	'suffix'?: string;
	'telephone': string;
	'vat_id'?: string;
	'vat_is_valid'?: number;
	'vat_request_date'?: string;
	'vat_request_id'?: string;
	'vat_request_success'?: number;
	'extension_attributes'?: SalesDataOrderAddressExtensionSchema;
}
interface SalesDataOrderAddressExtensionSchema {}
interface SalesDataOrderPaymentSchema {
	'account_status': string;
	'additional_data'?: string;
	'additional_information': {
		'items': string[]
	};
	'address_status'?: string;
	'amount_authorized'?: number;
	'amount_canceled'?: number;
	'amount_ordered'?: number;
	'amount_paid'?: number;
	'amount_refunded'?: number;
	'anet_trans_method'?: string;
	'base_amount_authorized'?: number;
	'base_amount_canceled'?: number;
	'base_amount_ordered'?: number;
	'base_amount_paid'?: number;
	'base_amount_paid_online'?: number;
	'base_amount_refunded'?: number;
	'base_amount_refunded_online'?: number;
	'base_shipping_amount'?: number;
	'base_shipping_captured'?: number;
	'base_shipping_refunded'?: number;
	'cc_approval'?: string;
	'cc_avs_status'?: string;
	'cc_cid_status'?: string;
	'cc_debug_request_body'?: string;
	'cc_debug_response_body'?: string;
	'cc_debug_response_serialized'?: string;
	'cc_exp_month'?: string;
	'cc_exp_year'?: string;
	'cc_last4': string;
	'cc_number_enc'?: string;
	'cc_owner'?: string;
	'cc_secure_verify'?: string;
	'cc_ss_issue'?: string;
	'cc_ss_start_month'?: string;
	'cc_ss_start_year'?: string;
	'cc_status'?: string;
	'cc_status_description'?: string;
	'cc_trans_id'?: string;
	'cc_type'?: string;
	'echeck_account_name'?: string;
	'echeck_account_type'?: string;
	'echeck_bank_name'?: string;
	'echeck_routing_number'?: string;
	'echeck_type'?: string;
	'entity_id'?: number;
	'last_trans_id'?: string;
	'method': string;
	'parent_id'?: number;
	'po_number'?: string;
	'protection_eligibility'?: string;
	'quote_payment_id'?: number;
	'shipping_amount'?: number;
	'shipping_captured'?: number;
	'shipping_refunded'?: number;
	'extension_attributes'?: SalesDataOrderPaymentExtensionSchema;
}
interface SalesDataOrderPaymentExtensionSchema {
	'vault_payment_token'?: VaultDataPaymentTokenSchema;
}
interface VaultDataPaymentTokenSchema {
	'entity_id'?: number;
	'customer_id'?: number;
	'public_hash': string;
	'payment_method_code': string;
	'type': string;
	'created_at'?: string;
	'expires_at'?: string;
	'gateway_token': string;
	'token_details': string;
	'is_active': boolean;
	'is_visible': boolean;
}
interface SalesDataOrderStatusHistorySchema {
	'comment': string;
	'created_at'?: string;
	'entity_id'?: number;
	'entity_name'?: string;
	'is_customer_notified': number;
	'is_visible_on_front': number;
	'parent_id': number;
	'status'?: string;
	'extension_attributes'?: SalesDataOrderStatusHistoryExtensionSchema;
}
interface SalesDataOrderStatusHistoryExtensionSchema {}
interface SalesDataOrderExtensionSchema {
	'shipping_assignments'?: {
		'items': SalesDataShippingAssignmentSchema[]
	};
	'applied_taxes'?: {
		'items': TaxDataOrderTaxDetailsAppliedTaxSchema[]
	};
	'item_applied_taxes'?: {
		'items': TaxDataOrderTaxDetailsItemSchema[]
	};
	'converting_from_quote'?: boolean;
	'company_order_attributes'?: CompanyDataCompanyOrderSchema;
	'base_customer_balance_amount'?: number;
	'customer_balance_amount'?: number;
	'base_customer_balance_invoiced'?: number;
	'customer_balance_invoiced'?: number;
	'base_customer_balance_refunded'?: number;
	'customer_balance_refunded'?: number;
	'base_customer_balance_total_refunded'?: number;
	'customer_balance_total_refunded'?: number;
	'gift_cards'?: {
		'items': GiftCardAccountDataGiftCardSchema[]
	};
	'base_gift_cards_amount'?: number;
	'gift_cards_amount'?: number;
	'base_gift_cards_invoiced'?: number;
	'gift_cards_invoiced'?: number;
	'base_gift_cards_refunded'?: number;
	'gift_cards_refunded'?: number;
	'gift_message'?: GiftMessageDataMessageSchema;
	'gw_id'?: string;
	'gw_allow_gift_receipt'?: string;
	'gw_add_card'?: string;
	'gw_base_price'?: string;
	'gw_price'?: string;
	'gw_items_base_price'?: string;
	'gw_items_price'?: string;
	'gw_card_base_price'?: string;
	'gw_card_price'?: string;
	'gw_base_tax_amount'?: string;
	'gw_tax_amount'?: string;
	'gw_items_base_tax_amount'?: string;
	'gw_items_tax_amount'?: string;
	'gw_card_base_tax_amount'?: string;
	'gw_card_tax_amount'?: string;
	'gw_base_price_incl_tax'?: string;
	'gw_price_incl_tax'?: string;
	'gw_items_base_price_incl_tax'?: string;
	'gw_items_price_incl_tax'?: string;
	'gw_card_base_price_incl_tax'?: string;
	'gw_card_price_incl_tax'?: string;
	'gw_base_price_invoiced'?: string;
	'gw_price_invoiced'?: string;
	'gw_items_base_price_invoiced'?: string;
	'gw_items_price_invoiced'?: string;
	'gw_card_base_price_invoiced'?: string;
	'gw_card_price_invoiced'?: string;
	'gw_base_tax_amount_invoiced'?: string;
	'gw_tax_amount_invoiced'?: string;
	'gw_items_base_tax_invoiced'?: string;
	'gw_items_tax_invoiced'?: string;
	'gw_card_base_tax_invoiced'?: string;
	'gw_card_tax_invoiced'?: string;
	'gw_base_price_refunded'?: string;
	'gw_price_refunded'?: string;
	'gw_items_base_price_refunded'?: string;
	'gw_items_price_refunded'?: string;
	'gw_card_base_price_refunded'?: string;
	'gw_card_price_refunded'?: string;
	'gw_base_tax_amount_refunded'?: string;
	'gw_tax_amount_refunded'?: string;
	'gw_items_base_tax_refunded'?: string;
	'gw_items_tax_refunded'?: string;
	'gw_card_base_tax_refunded'?: string;
	'gw_card_tax_refunded'?: string;
}
interface SalesDataShippingAssignmentSchema {
	'shipping': SalesDataShippingSchema;
	'items': {
		'items': SalesDataOrderItemSchema[]
	};
	'stock_id'?: number;
	'extension_attributes'?: SalesDataShippingAssignmentExtensionSchema;
}
interface SalesDataShippingSchema {
	'address'?: SalesDataOrderAddressSchema;
	'method'?: string;
	'total'?: SalesDataTotalSchema;
	'extension_attributes'?: SalesDataShippingExtensionSchema;
}
interface SalesDataTotalSchema {
	'base_shipping_amount'?: number;
	'base_shipping_canceled'?: number;
	'base_shipping_discount_amount'?: number;
	'base_shipping_discount_tax_compensation_amnt'?: number;
	'base_shipping_incl_tax'?: number;
	'base_shipping_invoiced'?: number;
	'base_shipping_refunded'?: number;
	'base_shipping_tax_amount'?: number;
	'base_shipping_tax_refunded'?: number;
	'shipping_amount'?: number;
	'shipping_canceled'?: number;
	'shipping_discount_amount'?: number;
	'shipping_discount_tax_compensation_amount'?: number;
	'shipping_incl_tax'?: number;
	'shipping_invoiced'?: number;
	'shipping_refunded'?: number;
	'shipping_tax_amount'?: number;
	'shipping_tax_refunded'?: number;
	'extension_attributes'?: SalesDataTotalExtensionSchema;
}
interface SalesDataTotalExtensionSchema {}
interface SalesDataShippingExtensionSchema {}
interface SalesDataShippingAssignmentExtensionSchema {}
interface TaxDataOrderTaxDetailsAppliedTaxSchema {
	'code'?: string;
	'title'?: string;
	'percent'?: number;
	'amount': number;
	'base_amount': number;
	'extension_attributes'?: TaxDataOrderTaxDetailsAppliedTaxExtensionSchema;
}
interface TaxDataOrderTaxDetailsAppliedTaxExtensionSchema {
	'rates'?: {
		'items': TaxDataAppliedTaxRateSchema[]
	};
}
interface TaxDataAppliedTaxRateSchema {
	'code'?: string;
	'title'?: string;
	'percent'?: number;
	'extension_attributes'?: TaxDataAppliedTaxRateExtensionSchema;
}
interface TaxDataAppliedTaxRateExtensionSchema {}
interface TaxDataOrderTaxDetailsItemSchema {
	'type'?: string;
	'item_id'?: number;
	'associated_item_id'?: number;
	'applied_taxes'?: {
		'items': TaxDataOrderTaxDetailsAppliedTaxSchema[]
	};
	'extension_attributes'?: TaxDataOrderTaxDetailsItemExtensionSchema;
}
interface TaxDataOrderTaxDetailsItemExtensionSchema {}
interface CompanyDataCompanyOrderSchema {
	'order_id'?: number;
	'company_id'?: number;
	'company_name'?: string;
	'extension_attributes'?: CompanyDataCompanyOrderExtensionSchema;
}
interface CompanyDataCompanyOrderExtensionSchema {}
interface GiftCardAccountDataGiftCardSchema {
	'id': number;
	'code': string;
	'amount': number;
	'base_amount': number;
}
interface SalesDataOrderSearchResultSchema {
	'items': {
		'items': SalesDataOrderSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataOrderStatusHistorySearchResultSchema {
	'items': {
		'items': SalesDataOrderStatusHistorySchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataOrderItemSearchResultSchema {
	'items': {
		'items': SalesDataOrderItemSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataInvoiceSchema {
	'base_currency_code'?: string;
	'base_discount_amount'?: number;
	'base_grand_total'?: number;
	'base_discount_tax_compensation_amount'?: number;
	'base_shipping_amount'?: number;
	'base_shipping_discount_tax_compensation_amnt'?: number;
	'base_shipping_incl_tax'?: number;
	'base_shipping_tax_amount'?: number;
	'base_subtotal'?: number;
	'base_subtotal_incl_tax'?: number;
	'base_tax_amount'?: number;
	'base_total_refunded'?: number;
	'base_to_global_rate'?: number;
	'base_to_order_rate'?: number;
	'billing_address_id'?: number;
	'can_void_flag'?: number;
	'created_at'?: string;
	'discount_amount'?: number;
	'discount_description'?: string;
	'email_sent'?: number;
	'entity_id'?: number;
	'global_currency_code'?: string;
	'grand_total'?: number;
	'discount_tax_compensation_amount'?: number;
	'increment_id'?: string;
	'is_used_for_refund'?: number;
	'order_currency_code'?: string;
	'order_id': number;
	'shipping_address_id'?: number;
	'shipping_amount'?: number;
	'shipping_discount_tax_compensation_amount'?: number;
	'shipping_incl_tax'?: number;
	'shipping_tax_amount'?: number;
	'state'?: number;
	'store_currency_code'?: string;
	'store_id'?: number;
	'store_to_base_rate'?: number;
	'store_to_order_rate'?: number;
	'subtotal'?: number;
	'subtotal_incl_tax'?: number;
	'tax_amount'?: number;
	'total_qty': number;
	'transaction_id'?: string;
	'updated_at'?: string;
	'items': {
		'items': SalesDataInvoiceItemSchema[]
	};
	'comments'?: {
		'items': SalesDataInvoiceCommentSchema[]
	};
	'extension_attributes'?: SalesDataInvoiceExtensionSchema;
}
interface SalesDataInvoiceItemSchema {
	'additional_data'?: string;
	'base_cost'?: number;
	'base_discount_amount'?: number;
	'base_discount_tax_compensation_amount'?: number;
	'base_price'?: number;
	'base_price_incl_tax'?: number;
	'base_row_total'?: number;
	'base_row_total_incl_tax'?: number;
	'base_tax_amount'?: number;
	'description'?: string;
	'discount_amount'?: number;
	'entity_id'?: number;
	'discount_tax_compensation_amount'?: number;
	'name'?: string;
	'parent_id'?: number;
	'price'?: number;
	'price_incl_tax'?: number;
	'product_id'?: number;
	'row_total'?: number;
	'row_total_incl_tax'?: number;
	'sku': string;
	'tax_amount'?: number;
	'extension_attributes'?: SalesDataInvoiceItemExtensionSchema;
	'order_item_id': number;
	'qty': number;
}
interface SalesDataInvoiceItemExtensionSchema {}
interface SalesDataInvoiceCommentSchema {
	'is_customer_notified': number;
	'parent_id': number;
	'extension_attributes'?: SalesDataInvoiceCommentExtensionSchema;
	'comment': string;
	'is_visible_on_front': number;
	'created_at'?: string;
	'entity_id'?: number;
}
interface SalesDataInvoiceCommentExtensionSchema {}
interface SalesDataInvoiceExtensionSchema {
	'base_customer_balance_amount'?: number;
	'customer_balance_amount'?: number;
	'base_gift_cards_amount'?: number;
	'gift_cards_amount'?: number;
	'gw_base_price'?: string;
	'gw_price'?: string;
	'gw_items_base_price'?: string;
	'gw_items_price'?: string;
	'gw_card_base_price'?: string;
	'gw_card_price'?: string;
	'gw_base_tax_amount'?: string;
	'gw_tax_amount'?: string;
	'gw_items_base_tax_amount'?: string;
	'gw_items_tax_amount'?: string;
	'gw_card_base_tax_amount'?: string;
	'gw_card_tax_amount'?: string;
}
interface SalesDataInvoiceSearchResultSchema {
	'items': {
		'items': SalesDataInvoiceSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataInvoiceCommentSearchResultSchema {
	'items': {
		'items': SalesDataInvoiceCommentSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataCreditmemoItemCreationSchema {
	'extension_attributes'?: SalesDataCreditmemoItemCreationExtensionSchema;
	'order_item_id': number;
	'qty': number;
}
interface SalesDataCreditmemoItemCreationExtensionSchema {}
interface SalesDataCreditmemoCommentCreationSchema {
	'extension_attributes'?: SalesDataCreditmemoCommentCreationExtensionSchema;
	'comment': string;
	'is_visible_on_front': number;
}
interface SalesDataCreditmemoCommentCreationExtensionSchema {}
interface SalesDataCreditmemoCreationArgumentsSchema {
	'shipping_amount'?: number;
	'adjustment_positive'?: number;
	'adjustment_negative'?: number;
	'extension_attributes'?: SalesDataCreditmemoCreationArgumentsExtensionSchema;
}
interface SalesDataCreditmemoCreationArgumentsExtensionSchema {
	'return_to_stock_items'?: {
		'items': number[]
	};
}
interface SalesDataCreditmemoCommentSearchResultSchema {
	'items': {
		'items': SalesDataCreditmemoCommentSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataCreditmemoCommentSchema {
	'comment': string;
	'created_at'?: string;
	'entity_id'?: number;
	'is_customer_notified': number;
	'is_visible_on_front': number;
	'parent_id': number;
	'extension_attributes'?: SalesDataCreditmemoCommentExtensionSchema;
}
interface SalesDataCreditmemoCommentExtensionSchema {}
interface SalesDataCreditmemoSchema {
	'adjustment'?: number;
	'adjustment_negative'?: number;
	'adjustment_positive'?: number;
	'base_adjustment'?: number;
	'base_adjustment_negative'?: number;
	'base_adjustment_positive'?: number;
	'base_currency_code'?: string;
	'base_discount_amount'?: number;
	'base_grand_total'?: number;
	'base_discount_tax_compensation_amount'?: number;
	'base_shipping_amount'?: number;
	'base_shipping_discount_tax_compensation_amnt'?: number;
	'base_shipping_incl_tax'?: number;
	'base_shipping_tax_amount'?: number;
	'base_subtotal'?: number;
	'base_subtotal_incl_tax'?: number;
	'base_tax_amount'?: number;
	'base_to_global_rate'?: number;
	'base_to_order_rate'?: number;
	'billing_address_id'?: number;
	'created_at'?: string;
	'creditmemo_status'?: number;
	'discount_amount'?: number;
	'discount_description'?: string;
	'email_sent'?: number;
	'entity_id'?: number;
	'global_currency_code'?: string;
	'grand_total'?: number;
	'discount_tax_compensation_amount'?: number;
	'increment_id'?: string;
	'invoice_id'?: number;
	'order_currency_code'?: string;
	'order_id': number;
	'shipping_address_id'?: number;
	'shipping_amount'?: number;
	'shipping_discount_tax_compensation_amount'?: number;
	'shipping_incl_tax'?: number;
	'shipping_tax_amount'?: number;
	'state'?: number;
	'store_currency_code'?: string;
	'store_id'?: number;
	'store_to_base_rate'?: number;
	'store_to_order_rate'?: number;
	'subtotal'?: number;
	'subtotal_incl_tax'?: number;
	'tax_amount'?: number;
	'transaction_id'?: string;
	'updated_at'?: string;
	'items': {
		'items': SalesDataCreditmemoItemSchema[]
	};
	'comments'?: {
		'items': SalesDataCreditmemoCommentSchema[]
	};
	'extension_attributes'?: SalesDataCreditmemoExtensionSchema;
}
interface SalesDataCreditmemoItemSchema {
	'additional_data'?: string;
	'base_cost': number;
	'base_discount_amount'?: number;
	'base_discount_tax_compensation_amount'?: number;
	'base_price': number;
	'base_price_incl_tax'?: number;
	'base_row_total'?: number;
	'base_row_total_incl_tax'?: number;
	'base_tax_amount'?: number;
	'base_weee_tax_applied_amount'?: number;
	'base_weee_tax_applied_row_amnt'?: number;
	'base_weee_tax_disposition'?: number;
	'base_weee_tax_row_disposition'?: number;
	'description'?: string;
	'discount_amount'?: number;
	'entity_id': number;
	'discount_tax_compensation_amount'?: number;
	'name'?: string;
	'order_item_id': number;
	'parent_id'?: number;
	'price'?: number;
	'price_incl_tax'?: number;
	'product_id'?: number;
	'qty': number;
	'row_total'?: number;
	'row_total_incl_tax'?: number;
	'sku'?: string;
	'tax_amount'?: number;
	'weee_tax_applied'?: string;
	'weee_tax_applied_amount'?: number;
	'weee_tax_applied_row_amount'?: number;
	'weee_tax_disposition'?: number;
	'weee_tax_row_disposition'?: number;
	'extension_attributes'?: SalesDataCreditmemoItemExtensionSchema;
}
interface SalesDataCreditmemoItemExtensionSchema {}
interface SalesDataCreditmemoExtensionSchema {
	'base_customer_balance_amount'?: number;
	'customer_balance_amount'?: number;
	'base_gift_cards_amount'?: number;
	'gift_cards_amount'?: number;
	'gw_base_price'?: string;
	'gw_price'?: string;
	'gw_items_base_price'?: string;
	'gw_items_price'?: string;
	'gw_card_base_price'?: string;
	'gw_card_price'?: string;
	'gw_base_tax_amount'?: string;
	'gw_tax_amount'?: string;
	'gw_items_base_tax_amount'?: string;
	'gw_items_tax_amount'?: string;
	'gw_card_base_tax_amount'?: string;
	'gw_card_tax_amount'?: string;
}
interface SalesDataCreditmemoSearchResultSchema {
	'items': {
		'items': SalesDataCreditmemoSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataShipmentSchema {
	'billing_address_id'?: number;
	'created_at'?: string;
	'customer_id'?: number;
	'email_sent'?: number;
	'entity_id'?: number;
	'increment_id'?: string;
	'order_id': number;
	'packages'?: {
		'items': SalesDataShipmentPackageSchema[]
	};
	'shipment_status'?: number;
	'shipping_address_id'?: number;
	'shipping_label'?: string;
	'store_id'?: number;
	'total_qty'?: number;
	'total_weight'?: number;
	'updated_at'?: string;
	'items': {
		'items': SalesDataShipmentItemSchema[]
	};
	'tracks': {
		'items': SalesDataShipmentTrackSchema[]
	};
	'comments': {
		'items': SalesDataShipmentCommentSchema[]
	};
	'extension_attributes'?: SalesDataShipmentExtensionSchema;
}
interface SalesDataShipmentPackageSchema {
	'extension_attributes'?: SalesDataShipmentPackageExtensionSchema;
}
interface SalesDataShipmentPackageExtensionSchema {}
interface SalesDataShipmentItemSchema {
	'additional_data'?: string;
	'description'?: string;
	'entity_id'?: number;
	'name'?: string;
	'parent_id'?: number;
	'price'?: number;
	'product_id'?: number;
	'row_total'?: number;
	'sku'?: string;
	'weight'?: number;
	'extension_attributes'?: SalesDataShipmentItemExtensionSchema;
	'order_item_id': number;
	'qty': number;
}
interface SalesDataShipmentItemExtensionSchema {}
interface SalesDataShipmentTrackSchema {
	'order_id': number;
	'created_at'?: string;
	'entity_id'?: number;
	'parent_id': number;
	'updated_at'?: string;
	'weight': number;
	'qty': number;
	'description': string;
	'extension_attributes'?: SalesDataShipmentTrackExtensionSchema;
	'track_number': string;
	'title': string;
	'carrier_code': string;
}
interface SalesDataShipmentTrackExtensionSchema {}
interface SalesDataShipmentCommentSchema {
	'is_customer_notified': number;
	'parent_id': number;
	'extension_attributes'?: SalesDataShipmentCommentExtensionSchema;
	'comment': string;
	'is_visible_on_front': number;
	'created_at'?: string;
	'entity_id'?: number;
}
interface SalesDataShipmentCommentExtensionSchema {}
interface SalesDataShipmentExtensionSchema {}
interface SalesDataShipmentSearchResultSchema {
	'items': {
		'items': SalesDataShipmentSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataShipmentCommentSearchResultSchema {
	'items': {
		'items': SalesDataShipmentCommentSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataShipmentItemCreationSchema {
	'extension_attributes'?: SalesDataShipmentItemCreationExtensionSchema;
	'order_item_id': number;
	'qty': number;
}
interface SalesDataShipmentItemCreationExtensionSchema {}
interface SalesDataShipmentCommentCreationSchema {
	'extension_attributes'?: SalesDataShipmentCommentCreationExtensionSchema;
	'comment': string;
	'is_visible_on_front': number;
}
interface SalesDataShipmentCommentCreationExtensionSchema {}
interface SalesDataShipmentTrackCreationSchema {
	'extension_attributes'?: SalesDataShipmentTrackCreationExtensionSchema;
	'track_number': string;
	'title': string;
	'carrier_code': string;
}
interface SalesDataShipmentTrackCreationExtensionSchema {}
interface SalesDataShipmentPackageCreationSchema {
	'extension_attributes'?: SalesDataShipmentPackageCreationExtensionSchema;
}
interface SalesDataShipmentPackageCreationExtensionSchema {}
interface SalesDataShipmentCreationArgumentsSchema {
	'extension_attributes'?: SalesDataShipmentCreationArgumentsExtensionSchema;
}
interface SalesDataShipmentCreationArgumentsExtensionSchema {}
interface SalesDataTransactionSchema {
	'transaction_id': number;
	'parent_id'?: number;
	'order_id': number;
	'payment_id': number;
	'txn_id': string;
	'parent_txn_id': string;
	'txn_type': string;
	'is_closed': number;
	'additional_information'?: {
		'items': string[]
	};
	'created_at': string;
	'child_transactions': {
		'items': SalesDataTransactionSchema[]
	};
	'extension_attributes'?: SalesDataTransactionExtensionSchema;
}
interface SalesDataTransactionExtensionSchema {}
interface SalesDataTransactionSearchResultSchema {
	'items': {
		'items': SalesDataTransactionSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesDataInvoiceItemCreationSchema {
	'extension_attributes'?: SalesDataInvoiceItemCreationExtensionSchema;
	'order_item_id': number;
	'qty': number;
}
interface SalesDataInvoiceItemCreationExtensionSchema {}
interface SalesDataInvoiceCommentCreationSchema {
	'extension_attributes'?: SalesDataInvoiceCommentCreationExtensionSchema;
	'comment': string;
	'is_visible_on_front': number;
}
interface SalesDataInvoiceCommentCreationExtensionSchema {}
interface SalesDataInvoiceCreationArgumentsSchema {
	'extension_attributes'?: SalesDataInvoiceCreationArgumentsExtensionSchema;
}
interface SalesDataInvoiceCreationArgumentsExtensionSchema {}
interface CheckoutDataShippingInformationSchema {
	'shipping_address': QuoteDataAddressSchema;
	'billing_address'?: QuoteDataAddressSchema;
	'shipping_method_code': string;
	'shipping_carrier_code': string;
	'extension_attributes'?: CheckoutDataShippingInformationExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CheckoutDataShippingInformationExtensionSchema {}
export interface CheckoutDataPaymentDetailsSchema {
	'payment_methods': QuoteDataPaymentMethodSchema[];
	'totals': QuoteDataTotalsSchema;
	'extension_attributes'?: CheckoutDataPaymentDetailsExtensionSchema;
}
interface CheckoutDataPaymentDetailsExtensionSchema {}
interface CheckoutDataTotalsInformationSchema {
	'address': QuoteDataAddressSchema;
	'shipping_method_code'?: string;
	'shipping_carrier_code'?: string;
	'extension_attributes'?: CheckoutDataTotalsInformationExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CheckoutDataTotalsInformationExtensionSchema {}
interface SalesRuleDataRuleSchema {
	'rule_id'?: number;
	'name'?: string;
	'store_labels'?: {
		'items': SalesRuleDataRuleLabelSchema[]
	};
	'description'?: string;
	'website_ids': {
		'items': number[]
	};
	'customer_group_ids': {
		'items': number[]
	};
	'from_date'?: string;
	'to_date'?: string;
	'uses_per_customer': number;
	'is_active': boolean;
	'condition'?: SalesRuleDataConditionSchema;
	'action_condition'?: SalesRuleDataConditionSchema;
	'stop_rules_processing': boolean;
	'is_advanced': boolean;
	'product_ids'?: {
		'items': number[]
	};
	'sort_order': number;
	'simple_action'?: string;
	'discount_amount': number;
	'discount_qty'?: number;
	'discount_step': number;
	'apply_to_shipping': boolean;
	'times_used': number;
	'is_rss': boolean;
	'coupon_type': string;
	'use_auto_generation': boolean;
	'uses_per_coupon': number;
	'simple_free_shipping'?: string;
	'extension_attributes'?: SalesRuleDataRuleExtensionSchema;
}
interface SalesRuleDataRuleLabelSchema {
	'store_id': number;
	'store_label': string;
	'extension_attributes'?: SalesRuleDataRuleLabelExtensionSchema;
}
interface SalesRuleDataRuleLabelExtensionSchema {}
interface SalesRuleDataConditionSchema {
	'condition_type': string;
	'conditions'?: {
		'items': SalesRuleDataConditionSchema[]
	};
	'aggregator_type'?: string;
	'operator': string;
	'attribute_name'?: string;
	'value': string;
	'extension_attributes'?: SalesRuleDataConditionExtensionSchema;
}
interface SalesRuleDataConditionExtensionSchema {}
interface SalesRuleDataRuleExtensionSchema {
	'reward_points_delta'?: number;
}
interface SalesRuleDataRuleSearchResultSchema {
	'items': {
		'items': SalesRuleDataRuleSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesRuleDataCouponSchema {
	'coupon_id'?: number;
	'rule_id': number;
	'code'?: string;
	'usage_limit'?: number;
	'usage_per_customer'?: number;
	'times_used': number;
	'expiration_date'?: string;
	'is_primary': boolean;
	'created_at'?: string;
	'type'?: number;
	'extension_attributes'?: SalesRuleDataCouponExtensionSchema;
}
interface SalesRuleDataCouponExtensionSchema {}
interface SalesRuleDataCouponSearchResultSchema {
	'items': {
		'items': SalesRuleDataCouponSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface SalesRuleDataCouponGenerationSpecSchema {
	'rule_id': number;
	'format': string;
	'quantity': number;
	'length': number;
	'prefix'?: string;
	'suffix'?: string;
	'delimiter_at_every'?: number;
	'delimiter'?: string;
	'extension_attributes'?: SalesRuleDataCouponGenerationSpecExtensionSchema;
}
interface SalesRuleDataCouponGenerationSpecExtensionSchema {}
interface SalesRuleDataCouponMassDeleteResultSchema {
	'failed_items': {
		'items': string[]
	};
	'missing_items': {
		'items': string[]
	};
}
interface CheckoutAgreementsDataAgreementSchema {
	'agreement_id': number;
	'name': string;
	'content': string;
	'content_height'?: string;
	'checkbox_text': string;
	'is_active': boolean;
	'is_html': boolean;
	'mode': number;
	'extension_attributes'?: CheckoutAgreementsDataAgreementExtensionSchema;
}
interface CheckoutAgreementsDataAgreementExtensionSchema {}
interface TaxDataTaxRateSchema {
	'id'?: number;
	'tax_country_id': string;
	'tax_region_id'?: number;
	'region_name'?: string;
	'tax_postcode'?: string;
	'zip_is_range'?: number;
	'zip_from'?: number;
	'zip_to'?: number;
	'rate': number;
	'code': string;
	'titles'?: {
		'items': TaxDataTaxRateTitleSchema[]
	};
	'extension_attributes'?: TaxDataTaxRateExtensionSchema;
}
interface TaxDataTaxRateTitleSchema {
	'store_id': string;
	'value': string;
	'extension_attributes'?: TaxDataTaxRateTitleExtensionSchema;
}
interface TaxDataTaxRateTitleExtensionSchema {}
interface TaxDataTaxRateExtensionSchema {}
interface TaxDataTaxRateSearchResultsSchema {
	'items': {
		'items': TaxDataTaxRateSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface TaxDataTaxRuleSchema {
	'id'?: number;
	'code': string;
	'priority': number;
	'position': number;
	'customer_tax_class_ids': {
		'items': number[]
	};
	'product_tax_class_ids': {
		'items': number[]
	};
	'tax_rate_ids': {
		'items': number[]
	};
	'calculate_subtotal'?: boolean;
	'extension_attributes'?: TaxDataTaxRuleExtensionSchema;
}
interface TaxDataTaxRuleExtensionSchema {}
interface TaxDataTaxRuleSearchResultsSchema {
	'items': {
		'items': TaxDataTaxRuleSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface TaxDataTaxClassSchema {
	'class_id'?: number;
	'class_name': string;
	'class_type': string;
	'extension_attributes'?: TaxDataTaxClassExtensionSchema;
}
interface TaxDataTaxClassExtensionSchema {}
interface TaxDataTaxClassSearchResultsSchema {
	'items': {
		'items': TaxDataTaxClassSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CompanyDataCompanySearchResultsSchema {
	'items': {
		'items': CompanyDataCompanySchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CompanyDataCompanySchema {
	'id'?: number;
	'status'?: number;
	'company_name'?: string;
	'legal_name'?: string;
	'company_email'?: string;
	'vat_tax_id'?: string;
	'reseller_id'?: string;
	'comment'?: string;
	'street': {
		'items': string[]
	};
	'city'?: string;
	'country_id'?: string;
	'region'?: string;
	'region_id'?: string;
	'postcode'?: string;
	'telephone'?: string;
	'customer_group_id': number;
	'sales_representative_id': number;
	'reject_reason': string;
	'rejected_at': string;
	'super_user_id': number;
	'extension_attributes'?: CompanyDataCompanyExtensionSchema;
}
interface CompanyDataCompanyExtensionSchema {
	'applicable_payment_method'?: number;
	'available_payment_methods'?: string;
	'use_config_settings'?: number;
	'quote_config'?: NegotiableQuoteDataCompanyQuoteConfigSchema;
}
interface NegotiableQuoteDataCompanyQuoteConfigSchema {
	'company_id'?: string;
	'is_quote_enabled': boolean;
	'extension_attributes'?: NegotiableQuoteDataCompanyQuoteConfigExtensionSchema;
}
interface NegotiableQuoteDataCompanyQuoteConfigExtensionSchema {}
interface CompanyDataTeamSearchResultsSchema {
	'items': {
		'items': CompanyDataTeamSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CompanyDataTeamSchema {
	'id'?: number;
	'name'?: string;
	'description'?: string;
	'extension_attributes'?: CompanyDataTeamExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface CompanyDataTeamExtensionSchema {}
interface CompanyDataHierarchySchema {
	'structure_id'?: number;
	'entity_id'?: number;
	'entity_type'?: string;
	'structure_parent_id'?: number;
	'extension_attributes'?: CompanyDataHierarchyExtensionSchema;
}
interface CompanyDataHierarchyExtensionSchema {}
interface CompanyDataRoleSearchResultsSchema {
	'items': {
		'items': CompanyDataRoleSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CompanyDataRoleSchema {
	'id'?: number;
	'role_name'?: string;
	'permissions': {
		'items': CompanyDataPermissionSchema[]
	};
	'company_id'?: number;
	'extension_attributes'?: CompanyDataRoleExtensionSchema;
}
interface CompanyDataPermissionSchema {
	'id'?: number;
	'role_id'?: number;
	'resource_id': string;
	'permission': string;
}
interface CompanyDataRoleExtensionSchema {}
interface AnalyticsDataLinkSchema {
	'url': string;
	'initialization_vector': string;
}
interface NegotiableQuoteDataAttachmentContentSchema {
	'base64_encoded_data': string;
	'type': string;
	'name': string;
	'extension_attributes'?: NegotiableQuoteDataAttachmentContentExtensionSchema;
}
interface NegotiableQuoteDataAttachmentContentExtensionSchema {}
interface NegotiableQuoteDataCommentSchema {
	'entity_id': number;
	'parent_id': number;
	'creator_type': number;
	'is_decline': number;
	'is_draft': number;
	'creator_id': number;
	'comment': string;
	'created_at': string;
	'extension_attributes'?: NegotiableQuoteDataCommentExtensionSchema;
	'attachments': {
		'items': NegotiableQuoteDataCommentAttachmentSchema[]
	};
}
interface NegotiableQuoteDataCommentExtensionSchema {}
interface NegotiableQuoteDataCommentAttachmentSchema {
	'attachment_id': number;
	'comment_id': number;
	'file_name': string;
	'file_path': string;
	'file_type': string;
	'extension_attributes'?: NegotiableQuoteDataCommentAttachmentExtensionSchema;
}
interface NegotiableQuoteDataCommentAttachmentExtensionSchema {}
interface GiftCardAccountDataGiftCardAccountSchema {
	'gift_cards': {
		'items': string[]
	};
	'gift_cards_amount': number;
	'base_gift_cards_amount': number;
	'gift_cards_amount_used': number;
	'base_gift_cards_amount_used': number;
	'extension_attributes'?: GiftCardAccountDataGiftCardAccountExtensionSchema;
}
interface GiftCardAccountDataGiftCardAccountExtensionSchema {}
interface SharedCatalogDataSharedCatalogSchema {
	'id'?: number;
	'name': string;
	'description': string;
	'customer_group_id': number;
	'type': number;
	'created_at': string;
	'created_by': number;
	'store_id': number;
	'tax_class_id': number;
}
interface SharedCatalogDataSearchResultsSchema {
	'items': {
		'items': SharedCatalogDataSharedCatalogSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface GiftWrappingDataWrappingSchema {
	'wrapping_id'?: number;
	'design': string;
	'status': number;
	'base_price': number;
	'image_name'?: string;
	'image_base64_content'?: string;
	'base_currency_code'?: string;
	'website_ids'?: {
		'items': number[]
	};
	'image_url'?: string;
	'extension_attributes'?: GiftWrappingDataWrappingExtensionSchema;
}
interface GiftWrappingDataWrappingExtensionSchema {}
interface GiftWrappingDataWrappingSearchResultsSchema {
	'items': {
		'items': GiftWrappingDataWrappingSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface RmaDataTrackSchema {
	'entity_id': number;
	'rma_entity_id': number;
	'track_number': string;
	'carrier_title': string;
	'carrier_code': string;
	'extension_attributes'?: RmaDataTrackExtensionSchema;
}
interface RmaDataTrackExtensionSchema {}
interface RmaDataTrackSearchResultSchema {
	'items': {
		'items': RmaDataTrackSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface RmaDataRmaSchema {
	'increment_id': string;
	'entity_id': number;
	'order_id': number;
	'order_increment_id': string;
	'store_id': number;
	'customer_id': number;
	'date_requested': string;
	'customer_custom_email': string;
	'items': {
		'items': RmaDataItemSchema[]
	};
	'status': string;
	'comments': {
		'items': RmaDataCommentSchema[]
	};
	'tracks': {
		'items': RmaDataTrackSchema[]
	};
	'extension_attributes'?: RmaDataRmaExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface RmaDataItemSchema {
	'entity_id': number;
	'rma_entity_id': number;
	'order_item_id': number;
	'qty_requested': number;
	'qty_authorized': number;
	'qty_approved': number;
	'qty_returned': number;
	'reason': string;
	'condition': string;
	'resolution': string;
	'status': string;
	'extension_attributes'?: RmaDataItemExtensionSchema;
}
interface RmaDataItemExtensionSchema {}
interface RmaDataCommentSchema {
	'comment': string;
	'rma_entity_id': number;
	'created_at': string;
	'entity_id': number;
	'customer_notified': boolean;
	'visible_on_front': boolean;
	'status': string;
	'admin': boolean;
	'extension_attributes'?: RmaDataCommentExtensionSchema;
	'custom_attributes'?: {
		'items': FrameworkAttributeSchema[]
	};
}
interface RmaDataCommentExtensionSchema {}
interface RmaDataRmaExtensionSchema {}
interface RmaDataCommentSearchResultSchema {
	'items': {
		'items': RmaDataCommentSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface RmaDataRmaSearchResultSchema {
	'items': {
		'items': RmaDataRmaSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface FrameworkMetadataObjectSchema {
	'attribute_code': string;
}
interface CompanyCreditDataCreditLimitSearchResultsSchema {
	'items': {
		'items': CompanyCreditDataCreditDataSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CompanyCreditDataCreditDataSchema {
	'id'?: number;
	'company_id'?: number;
	'credit_limit'?: number;
	'balance'?: number;
	'currency_code'?: string;
	'exceed_limit': boolean;
	'available_limit'?: number;
}
interface CompanyCreditDataCreditLimitSchema {
	'id'?: number;
	'company_id'?: number;
	'credit_limit'?: number;
	'balance'?: number;
	'currency_code'?: string;
	'exceed_limit': boolean;
	'available_limit'?: number;
	'credit_comment'?: string;
	'extension_attributes'?: CompanyCreditDataCreditLimitExtensionSchema;
}
interface CompanyCreditDataCreditLimitExtensionSchema {}
interface CompanyCreditDataCreditBalanceOptionsSchema {
	'purchase_order': string;
	'order_increment': string;
	'currency_display': string;
	'currency_base': string;
}
interface CompanyCreditDataHistorySearchResultsSchema {
	'items': {
		'items': CompanyCreditDataHistoryDataSchema[]
	};
	'search_criteria': FrameworkSearchCriteriaSchema;
	'total_count': number;
}
interface CompanyCreditDataHistoryDataSchema {
	'id'?: number;
	'company_credit_id'?: number;
	'user_id'?: number;
	'user_type'?: number;
	'currency_credit'?: string;
	'currency_operation'?: string;
	'rate': number;
	'rate_credit'?: number;
	'amount': number;
	'balance': number;
	'credit_limit': number;
	'available_limit'?: number;
	'type'?: number;
	'datetime'?: string;
	'purchase_order'?: string;
	'comment'?: string;
}