<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $data ObjekatHasKategorija */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('columnName')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->columnName), array('view', 'id'=>$data->columnName)); ?>
	<br />


</div>