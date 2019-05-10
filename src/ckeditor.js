/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';

import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

import Heading from '@ckeditor/ckeditor5-heading/src/heading';

import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import Font from '@ckeditor/ckeditor5-font/src/font';

import LineHeight from 'ckeditor5-line-height';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,

	Bold,
	Italic,
	Paragraph,
	Font,
	RemoveFormat,
	LineHeight,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'fontSize',
			'fontColor',
			'lineHeight',
			'bold',
			'italic',
			'|',
			'removeFormat',
			'undo',
			'redo'
		]
	},

	fontSize: {
		options: [
			9,
			11,
			12,
			14,
			16,
			18,
			20,
			24,
			32,
			48,
			56,
			64,
			72,
			84,
			96,
			108,
		]
	},

	lineHeight: {
		options: [
			0.5,
			0.75,
			1,
			1.25,
			1.5,
			1.75,
			2,
			2.25,
			2.5
		]
	},

	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
