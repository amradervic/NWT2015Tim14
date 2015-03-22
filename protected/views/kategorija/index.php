<?php
/* @var $this KategorijaController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Kategorijas',
);

$this->menu=array(
	array('label'=>'Create Kategorija', 'url'=>array('create')),
	array('label'=>'Manage Kategorija', 'url'=>array('admin')),
);
?>

<h1>Kategorijas</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
