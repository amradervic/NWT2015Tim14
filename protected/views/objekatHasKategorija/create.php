<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $model ObjekatHasKategorija */

$this->breadcrumbs=array(
	'Objekat Has Kategorijas'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List ObjekatHasKategorija', 'url'=>array('index')),
	array('label'=>'Manage ObjekatHasKategorija', 'url'=>array('admin')),
);
?>

<h1>Create ObjekatHasKategorija</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>