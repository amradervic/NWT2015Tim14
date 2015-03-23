<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $model ObjekatHasKategorija */

$this->breadcrumbs=array(
	'Objekat Has Kategorijas'=>array('index'),
	$model->Objekat_idObjekat,
);

$this->menu=array(
	array('label'=>'List ObjekatHasKategorija', 'url'=>array('index')),
	array('label'=>'Create ObjekatHasKategorija', 'url'=>array('create')),
	array('label'=>'Update ObjekatHasKategorija', 'url'=>array('update', 'id'=>$model->columnName)),
	array('label'=>'Delete ObjekatHasKategorija', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->columnName),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage ObjekatHasKategorija', 'url'=>array('admin')),
);
?>

<h1>View ObjekatHasKategorija #<?php echo $model->columnName; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'Objekat_idObjekat',
		'Kategorija_idKategorija',
	),
)); ?>
